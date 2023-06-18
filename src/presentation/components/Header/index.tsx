'use client';

import { List, MagnifyingGlass } from '@phosphor-icons/react';
import { AnimatePresence } from 'framer-motion';
import { useHeaderHandler } from 'presentation/handler/components/Header';

import Link from 'next/link';
import { Text } from '../Typography/Text';

import { Navigation } from '../Nav';
import {
  Actions, Container, Content, IconButton,
} from './styles';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  const {
    navIsVisible, handleCloseNavVisibility, handleToggleNavVisibility,
  } = useHeaderHandler();

  return (
    <Container>
      <Content>
        <LanguageSwitcher />

        <Actions>
          <Link href="/search">
            <Text schema={900}>
              <MagnifyingGlass size={32} />
            </Text>
          </Link>

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
