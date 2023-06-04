import { X } from 'phosphor-react';

import { Overlay } from 'presentation/components/Overlay';
import { Portal } from 'presentation/components/Portal';
import { Title } from 'presentation/components/Typography/Title';

import { SetMediaCollectionModalProps } from 'types/presentation/collection';

import { cineShareApi } from 'infra/api/cineShareApi';
import { Button } from 'presentation/components/Button';
import { Loader } from 'presentation/components/Loader';
import { useQuery } from 'react-query';
import { ResponsesCollection } from 'types/server/collection';
import { CollectionCard } from '../Card';
import { ModalContainerCollection } from '../styles/ModalContainer';
import { Content, ListCollection } from './styles';

export function SetMediaCollectionModal({ visible, onClose }: SetMediaCollectionModalProps) {
  const { data, isLoading } = useQuery('collection-user-owner', () => cineShareApi.get('/collection/user'));

  if (!visible) {
    return null;
  }

  return (
    <Portal selector="add-media-collection-modal">
      <Overlay>
        <ModalContainerCollection maxWidth="560px">
          <div className="header">
            <Title as="strong" size="medium">Adicione em uma coleção</Title>
            <button type="button" onClick={onClose}>
              <X />
            </button>
          </div>

          <Content>

            <ListCollection>
              {isLoading && <Loader size={50} />}
              {!isLoading && data?.data?.length > 0 && (
                data?.data.map((collection: ResponsesCollection) => (
                  <li key={collection.id}>
                    <CollectionCard
                      title={collection.name}
                      owner={collection.user.name}
                      countMedia={collection._count.media}
                    />
                  </li>
                ))
              )}
              {!isLoading && data?.data?.length === 0 && (
              <Title as="span" schema={500}>
                Não há nenhuma coleção cadastrada
              </Title>
              )}
            </ListCollection>

            <div className="actions">
              <Button>
                Adicionar
              </Button>

              <Button outline schemaColor="softGray">
                Criar Coleção
              </Button>
            </div>
          </Content>
        </ModalContainerCollection>
      </Overlay>
    </Portal>
  );
}
