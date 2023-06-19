'use client';

import { useState } from 'react';
import { useQuery } from 'react-query';

import { indexUserCollection } from 'infra/services/collection/indexUserCollection';
import { Title } from 'presentation/components/Typography/Title';

import { Plus } from '@phosphor-icons/react';
import Link from 'next/link';
import { Button } from 'presentation/components/Button';
import { Center } from 'presentation/components/Center';
import { CollectionCard } from 'presentation/components/Collection/Card';
import { CollectionModalCreate } from 'presentation/components/Collection/Create';
import { Loader } from 'presentation/components/Loader';
import { Text } from 'presentation/components/Typography/Text';
import { useTranslation } from 'app/i18n';
import * as Root from './styles';

export function MyCollectionUI() {
  const { data, isLoading, refetch } = useQuery('collection-user', indexUserCollection, {
    refetchOnWindowFocus: true,
  });
  const { t } = useTranslation('common');
  const [isVisibleCreateCollectionModal, setIsVisibleCreateCollectionModal] = useState(false);

  function handleOpenCreateCollectionModal() {
    setIsVisibleCreateCollectionModal(true);
  }

  function handleCloseCreateCollectionModal() {
    refetch();
    setIsVisibleCreateCollectionModal(false);
  }

  return (
    <Root.Container>
      <header>
        <Title size="large">
          {t('collection.list.title')}
        </Title>

        <Button onClick={handleOpenCreateCollectionModal}>
          <Plus size={24} />
          {t('collection.list.addCollection')}
        </Button>
      </header>

      {isLoading && (
        <Center>
          <Loader size={40} />
        </Center>
      )}

      {data?.data && (
        <ul>
          {data?.data.map((currentCollection) => (
            <li key={currentCollection.id}>
              <Link href={`/collection/${currentCollection.id}`}>
                <CollectionCard
                  title={currentCollection.name}
                  owner={currentCollection.user.name}
                  countMedia={currentCollection._count.media}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}

      {(data?.data?.length === 0 && !isLoading) && (
        <Center className="cta-no-data">
          <Text schema={600} as="p">
            {t('collection.list.noData.description')}
          </Text>

          <Button onClick={handleOpenCreateCollectionModal}>
            {t('collection.list.noData.cta.submit')}
          </Button>
        </Center>
      )}

      <CollectionModalCreate
        visible={isVisibleCreateCollectionModal}
        onClose={handleCloseCreateCollectionModal}
      />
    </Root.Container>
  );
}
