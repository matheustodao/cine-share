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

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const { locales } = i18n;

  return matchLocale(languages, locales as unknown as string[], i18n.fallbackLng);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocale(request);

  const pathnameIsMissingLocale = i18n.locales.every(
    (currentLocale) => !pathname.startsWith(`/${currentLocale}`) && pathname !== `/${currentLocale}`,
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }

  if (pathname === '/' || pathname === `/${locale}`) {
    return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
