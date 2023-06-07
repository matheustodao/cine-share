'use client';

import { useSession } from 'next-auth/react';
import { Share, Trash } from 'phosphor-react';
import { Button } from 'presentation/components/Button';
import { CollectionUIFooterProps } from 'types/presentation/collection';

import { RWebShare } from 'react-web-share';

import * as Root from './sytles';

export function CollectionFooter({
  userEmail,
}: CollectionUIFooterProps) {
  const { status, data } = useSession();

  return (
    <Root.Container>
      <RWebShare
        data={{
          title: 'Dê uma olhada nessas recomendações imperdíveis para assistir º CineShare',
        }}
      >
        <Button>
          <Share size={24} />
          Compartilhar
        </Button>
      </RWebShare>

      {/* TODO add feature to delete collection  */}
      {(status === 'authenticated' && userEmail === data?.user?.email && false) && (
        <Button schemaColor="red" aria-label="apagar coleção">
          <Trash size={24} />
        </Button>
      )}
    </Root.Container>
  );
}
