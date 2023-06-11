'use client';

import { useSession } from 'next-auth/react';
import { Share, Trash } from 'phosphor-react';

import { useTranslation } from 'app/i18n';
import { Button } from 'presentation/components/Button';
import { CollectionUIFooterProps } from 'types/presentation/collection';

import { RWebShare } from 'react-web-share';

import * as Root from './sytles';

export function CollectionFooter({
  userEmail, hasMedia,
}: CollectionUIFooterProps) {
  const { status, data } = useSession();
  const { t } = useTranslation('common');

  return (
    <Root.Container>
      {hasMedia && (
        <RWebShare
          data={{
            title: 'CineShare',
            text: t('share.collection'),
          }}
        >
          <Button>
            <Share size={24} />
            {t('collection.view.cta.share')}
          </Button>
        </RWebShare>
      )}

      {/* TODO add feature to delete collection  */}
      {(status === 'authenticated' && userEmail === data?.user?.email && false) && (
        <Button schemaColor="red" aria-label="apagar coleção">
          <Trash size={24} />
        </Button>
      )}
    </Root.Container>
  );
}
