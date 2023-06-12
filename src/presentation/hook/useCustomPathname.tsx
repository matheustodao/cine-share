import { usePathname } from 'next/navigation';
import {
  useCallback, useLayoutEffect, useState,
} from 'react';

const regexToRemoveLocale = /^\/(?:[^\\/]+)(\/.*)$/;
const regexToGetLocale = /^\/([^\\/]+)/;

export function useCustomPathname() {
  const pathname = usePathname();
  const [locale, setLocale] = useState('');
  const [parsePathname, setParsePathname] = useState('');

  const revalidatePathname = useCallback(() => {
    if (pathname) {
      setParsePathname(pathname.replace(regexToRemoveLocale, '$1'));
      const currentLocale = pathname.match(regexToGetLocale);
      setLocale(currentLocale ? currentLocale[1] : '');
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
