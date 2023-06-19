'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCustomPathname } from 'presentation/hook/useCustomPathname';
import { useMemo } from 'react';

export function LanguageSwitcher() {
  const { locale, pathname } = useCustomPathname();

  const isPTLocale = useMemo(() => locale === 'pt-BR', [locale]);

  return (
    <Link href={`/${isPTLocale ? 'en-US' : 'pt-BR'}${pathname}`} scroll={false}>
      <Image
        src={`/assets/icons/${isPTLocale ? 'us' : 'br'}-flag.svg`}
        alt="logo"
        width={34}
        height={34}
      />
    </Link>
  );
}
