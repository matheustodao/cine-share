import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import * as i18n from 'app/i18n/settings';

import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });
  const pathLocale = request.cookies.get('x-locale')?.value;

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const { locales } = i18n;

  return !i18n.locales.includes(pathLocale ?? '')
    ? matchLocale(languages, locales as unknown as string[], i18n.fallbackLng)
    : pathLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocale(request);

  const pathnameIsMissingLocale = i18n.locales.every(
    (currentLocale) => !pathname.startsWith(`/${currentLocale}`) && pathname !== `/${currentLocale}`,
  );

  const isLocaleExists = i18n.locales.findIndex(
    (currentLocale) => currentLocale === locale,
  );

  const isLocaleExistsLowerCaseComparator = i18n.locales.findIndex(
    (currentLocale) => currentLocale?.toLocaleLowerCase() === locale?.toLocaleLowerCase(),
  );
  const isWrongLocale = isLocaleExists === -1 && isLocaleExistsLowerCaseComparator !== -1;
  const localeToRedirect = isWrongLocale ? i18n.fallbackLng : locale;

  if (isWrongLocale) {
    return NextResponse.redirect(new URL(`/${localeToRedirect}/home`, request.url));
  }

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${localeToRedirect}/${pathname}`, request.url));
  }

  if (pathname === `/${locale}`) {
    return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
