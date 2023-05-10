import { List, MagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import { Text } from '../Typography/Text';

import { Navigation } from '../Nav';
import {
  Actions, Container, Content, IconButton,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Image src="/assets/logo/logo-white.svg" alt="logo" width={34} height={34} />

        <Actions>
          <IconButton type="button">
            <Text schema={900}>
              <MagnifyingGlass size={32} />
            </Text>
          </IconButton>

          <IconButton type="button">
            <Text schema={900}>
              <List size={32} />
            </Text>
          </IconButton>
        </Actions>
      </Content>

      <Navigation />
    </Container>
  );
}
