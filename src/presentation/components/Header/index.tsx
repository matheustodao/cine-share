import { List, MagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import { useHeaderHandler } from 'presentation/handler/components/Header';
import { Text } from '../Typography/Text';

import { Navigation } from '../Nav';
import {
  Actions, Container, Content, IconButton,
} from './styles';

export function Header() {
  const { navIsVisible, handleCloseNavVisibility, handleToggleNavVisibility } = useHeaderHandler();

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

          <IconButton type="button" onClick={handleToggleNavVisibility}>
            <Text schema={900}>
              <List size={32} />
            </Text>
          </IconButton>
        </Actions>
      </Content>

      <Navigation shown={navIsVisible} onClose={handleCloseNavVisibility} />
    </Container>
  );
}
