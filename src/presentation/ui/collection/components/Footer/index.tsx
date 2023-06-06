'use client';

import { useSession } from 'next-auth/react';
import { Share, Trash } from 'phosphor-react';
import { Button } from 'presentation/components/Button';
import { CollectionUIFooterProps } from 'types/presentation/collection';

import * as Root from './sytles';

export function CollectionFooter({
  userEmail,
}: CollectionUIFooterProps) {
  const { status, data } = useSession();

  return (
    <Root.Container>
      <Button>
        <Share size={24} />
        Compartilhar
      </Button>

      {(status === 'authenticated' && userEmail === data?.user?.email) && (
        <Button schemaColor="red" aria-label="apagar coleção">
          <Trash size={24} />
        </Button>
      )}
    </Root.Container>
  );
}
