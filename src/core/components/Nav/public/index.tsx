import { X } from '@phosphor-icons/react';

import { Text } from 'core/components/Typography/Text';
import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  Header,
  Nav,
  Route,
} from './styles';

export function NavPublic() {
  return (
    <Container>
      <Header>
        <Image src="/assets/logo/logo-white.svg" alt="logo" width={34} height={34} />

        <button type="button">
          <Text schema={900}>
            <X size={32} />
          </Text>
        </button>
      </Header>

      <div>
        <Nav>
          <Route active="true">
            <Link href="/" role="link">
              Home
            </Link>
          </Route>
        </Nav>
      </div>
    </Container>
  );
}
