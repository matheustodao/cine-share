'use client';

import { Header } from 'core/components/Header';
import { IChildren } from 'domain/core/core';
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
