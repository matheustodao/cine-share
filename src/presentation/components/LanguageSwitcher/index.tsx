'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCustomPathname } from 'presentation/hook/useCustomPathname';

export function LanguageSwitcher() {
  const { locale, pathname } = useCustomPathname();

  const supportedLanguages = ['pt-BR', 'en-US', 'ru-RU', 'ja-JP'];

  return (
    <Link href={`/${!supportedLanguages.includes(locale) ? 'pt-BR' : supportedLanguages[(supportedLanguages.indexOf(locale) + 1) >= 5 ? 0 : supportedLanguages.indexOf(locale) + 1]}${pathname}`} scroll={false}>
      <Image
        src={`/assets/icons/${!supportedLanguages.includes(locale) ? 'pt-BR' : locale}-flag.svg`}
        alt="logo"
        width={34}
        height={34}
      />
    </Link>
  );
}
