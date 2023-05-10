'use client';

import { Header } from 'presentation/components/Header';
import { IChildren } from 'types/presentation/core';
import { Provider } from '../Provider';
import { Bubbles } from '../components/Bubbles';
import { Container, Content } from './styles';

export function MainLayout({ children }: IChildren) {
  return (
    <Provider>
      <Bubbles />
      <Bubbles schema="red" />

      <Container role="application">
        <Header />

        <Content>
          {children}
        </Content>
      </Container>
    </Provider>
  );
}
