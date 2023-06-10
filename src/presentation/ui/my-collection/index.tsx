'use client';

import { useState } from 'react';
import { useQuery } from 'react-query';

import { indexUserCollection } from 'infra/services/collection/indexUserCollection';
import { CollectionCard } from 'presentation/components/Collection/Card';
import { Title } from 'presentation/components/Typography/Title';

import { Plus } from '@phosphor-icons/react';
import Link from 'next/link';
import { Button } from 'presentation/components/Button';
import { CollectionModalCreate } from 'presentation/components/Collection/Create';
import * as Root from './styles';

export function MyCollectionUI() {
  const { data } = useQuery('collection-user', indexUserCollection);
  const [isVisibleCreateCollectionModal, setIsVisibleCreateCollectionModal] = useState(false);

  function handleOpenCreateCollectionModal() {
    setIsVisibleCreateCollectionModal(true);
  }

  function handleCloseCreateCollectionModal() {
    setIsVisibleCreateCollectionModal(false);
  }

  return (
    <Root.Container>
      <header>
        <Title size="large">Minhas coleções</Title>

        <Button onClick={handleOpenCreateCollectionModal}>
          <Plus size={24} />
          Coleção
        </Button>
      </header>

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

      <CollectionModalCreate
        visible={isVisibleCreateCollectionModal}
        onClose={handleCloseCreateCollectionModal}
      />
    </Root.Container>
  );
}
