'use client';

import { Share, Trash } from 'phosphor-react';
import { Button } from 'presentation/components/Button';

import * as Root from './sytles';

export function CollectionFooter() {
  return (
    <Root.Container>
      <Button>
        <Share size={24} />
        Compartilhar
      </Button>

      <Button schemaColor="red" aria-label="apagar coleção">
        <Trash size={24} />
      </Button>
    </Root.Container>
  );
}
