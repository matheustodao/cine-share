import { X } from '@phosphor-icons/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Power } from 'phosphor-react';
import { useCallback, useEffect } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { useTranslation } from 'app/i18n';
import { Text } from 'presentation/components/Typography/Text';
import { useNavHandler } from 'presentation/handler/components/Nav';
import { NavigationProps } from 'types/presentation/nav';

import { Button } from '../Button';
import { Portal } from '../Portal';

import {
  Container,
  Header,
  Nav,
  Route,
} from './styles';

export function Navigation({ onClose, shown }: NavigationProps) {
  const { routesDynamicProtected, status } = useNavHandler();
  const elementRef = useDetectClickOutside({ onTriggered: onClose });
  const pathname = usePathname();
  const { t } = useTranslation();

  const listenerPathnameChange = useCallback(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    listenerPathnameChange();
  }, [listenerPathnameChange]);

  if (!shown) return null;

  return (
    <Portal>
      <aside ref={elementRef}>
        <Container
          initial={{
            scale: 0.2,
          }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0.2,
          }}
          transition={{
            opacity: { ease: 'easeInOut' },
            layout: { duration: 1 },
          }}
        >
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
                    {t(label)}
                  </Link>
                </Route>
              ))}

              {status === 'authenticated' && (
                <Route active="false">
                  <Button schemaColor="unstyled" onClick={() => signOut()}>
                    <Power weight="bold" size={20} />
                    {t('logout')}
                  </Button>
                </Route>
              )}
            </Nav>
          </div>
        </Container>
      </aside>
    </Portal>
  );
}
