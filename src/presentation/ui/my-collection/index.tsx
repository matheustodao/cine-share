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
import * as Root from './styles';

export function MyCollectionUI() {
  const { data, isLoading, refetch } = useQuery('collection-user', indexUserCollection);
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
        <Title size="large">Minhas coleções</Title>

        <Button onClick={handleOpenCreateCollectionModal}>
          <Plus size={24} />
          Coleção
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
            Percebi que você ainda não criou nenhuma coleção para compartilhar com seus amigos.
            Não se preocupe, estamos aqui para te ajudar a começar!
          </Text>

          <Button onClick={handleOpenCreateCollectionModal}>
            Cadastre coleção
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
