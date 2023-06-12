'use client';

import { List, MagnifyingGlass } from '@phosphor-icons/react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useHeaderHandler } from 'presentation/handler/components/Header';
import { useCustomPathname } from 'presentation/hook/useCustomPathname';
import Link from 'next/link';
import { useMemo } from 'react';
import { Text } from '../Typography/Text';

import { Navigation } from '../Nav';
import {
  Actions, Container, Content, IconButton,
} from './styles';

export function Header() {
  const {
    navIsVisible, handleCloseNavVisibility, handleToggleNavVisibility,
  } = useHeaderHandler();
  const { locale, pathname } = useCustomPathname();

  const isPTLocale = useMemo(() => locale === 'pt-BR', [locale]);

  return (
    <Container>
      <Content>
        <Link href={`/${isPTLocale ? 'en-US' : 'pt-BR'}${pathname}`} scroll={false}>
          <Image
            src={`/assets/icons/${isPTLocale ? 'us' : 'br'}-flag.svg`}
            alt="logo"
            width={34}
            height={34}
          />
        </Link>

        <Actions>
          <IconButton type="button">
            <Text schema={900}>
              <MagnifyingGlass size={32} />
            </Text>
          </IconButton>

          <IconButton type="button" onClick={handleToggleNavVisibility}>
            <Text schema={900}>
              <List size={32} />
            </Text>
          </IconButton>
        </Actions>
      </Content>

      <AnimatePresence mode="wait">
        <Navigation
          shown={navIsVisible}
          onClose={handleCloseNavVisibility}
        />
      </AnimatePresence>
    </Container>
  );
}
