import {
  useCallback, useLayoutEffect, useState,
} from 'react';
import { usePathname } from 'next/navigation';

import { setCookie } from 'nookies';
import { regexToGetLocale, regexToRemoveLocale } from 'core/utils/regex';

export function useCustomPathname() {
  const pathname = usePathname();
  const [locale, setLocale] = useState('');
  const [parsePathname, setParsePathname] = useState('');

  const revalidatePathname = useCallback(() => {
    if (pathname) {
      setParsePathname(pathname.replace(regexToRemoveLocale, '$1'));
      const currentLocale = pathname.match(regexToGetLocale);
      setLocale(currentLocale ? currentLocale[1] : '');

      setCookie(null, 'x-locale', currentLocale?.[1] ?? '', {
        path: '/',
      });
    }
  }, [pathname]);

  useLayoutEffect(() => {
    revalidatePathname();
  }, [revalidatePathname]);

  return {
    locale,
    pathname: parsePathname,
  };
}
