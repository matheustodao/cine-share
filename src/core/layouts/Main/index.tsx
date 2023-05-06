'use client';

import { IChildren } from 'domain/core/core';
import { Bubbles } from '../components/Bubbles';
import { Provider } from '../provider';
import { Container, Content } from './styles';

export function MainLayout({ children }: IChildren) {
  return (
    <Provider>
      <Bubbles />
      <Bubbles schema="red" />

      <Container>
        <div className="nav" />

        <Content>
          {children}
        </Content>
      </Container>
    </Provider>
  );
}
