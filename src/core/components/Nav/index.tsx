import { X } from '@phosphor-icons/react';

import { Portal } from 'core/components/Portal';
import { Text } from 'core/components/Typography/Text';
import { useNavModel } from 'core/model/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  Header,
  Nav,
  Route,
} from './styles';

export function Navigation() {
  const { routesDynamicProtected } = useNavModel();

  return (
    <Portal>
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
            {routesDynamicProtected.map(({
              active, label, link,
            }) => (
              <Route active={active.toString() as 'true' | 'false'} key={link}>
                <Link href={link} role="link">
                  {label}
                </Link>
              </Route>
            ))}
          </Nav>
        </div>
      </Container>
    </Portal>
  );
}
