'use client';

import { Pencil } from 'phosphor-react';
import { Text } from 'presentation/components/Typography/Text';
import { Title } from 'presentation/components/Typography/Title';

import * as Root from './styles';

export function CollectionHeader() {
  return (
    <Root.Container>
      <div className="info">
        <div>
          <Title as="h1" size="xl" weight="semi">
            Top 100 filmes
          </Title>
        </div>

        <button type="button">
          <Pencil size={24} color="#fff" />
        </button>
      </div>

      <Text as="p" weight="xlight" schema={500}>
        As minhas recomendações de filmes de 2022 e 2023.
      </Text>
    </Root.Container>
  );
}
