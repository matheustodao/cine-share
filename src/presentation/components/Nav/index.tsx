import { X } from '@phosphor-icons/react';

import Image from 'next/image';
import Link from 'next/link';
import { Portal } from 'presentation/components/Portal';
import { Text } from 'presentation/components/Typography/Text';
import { useNavHandler } from 'presentation/handler/components/Nav';
import { NavigationProps } from 'types/presentation/components/nav';
import {
  Container,
  Header,
  Nav,
  Route,
} from './styles';

export function Navigation({ onClose, shown }: NavigationProps) {
  const { routesDynamicProtected } = useNavHandler();

  if (!shown) return null;

  return (
    <Portal>
      <Container>
        <Header>
          <Image src="/assets/logo/logo-white.svg" alt="logo" width={34} height={34} />

          <button type="button" onClick={onClose}>
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
