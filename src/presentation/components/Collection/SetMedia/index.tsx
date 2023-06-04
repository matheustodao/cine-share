import { X } from 'phosphor-react';

import { Overlay } from 'presentation/components/Overlay';
import { Portal } from 'presentation/components/Portal';
import { Title } from 'presentation/components/Typography/Title';

import { SetMediaCollectionModalProps } from 'types/presentation/collection';

import { Button } from 'presentation/components/Button';
import { Loader } from 'presentation/components/Loader';
import { useSetMediaCollectionModalHandler } from 'presentation/handler/components/Collection/MediaModal';
import { ResponsesCollection } from 'types/server/collection';
import { CollectionCard } from '../Card';
import { CollectionModalCreate } from '../Create';
import { ModalContainerCollection } from '../styles/ModalContainer';
import { Content, ListCollection } from './styles';

export function SetMediaCollectionModal({ visible, onClose }: SetMediaCollectionModalProps) {
  const { collections, createCollectionModal } = useSetMediaCollectionModalHandler();

  if (!visible) {
    return null;
  }

  return (
    <Portal selector="add-media-collection-modal">
      <CollectionModalCreate
        onClose={createCollectionModal.onClose}
        visible={createCollectionModal.isVisible}
      />

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
              {collections.isLoading && <Loader size={50} />}
              {!collections.isLoading && collections.data?.length > 0 && (
                collections.data.map((collection: ResponsesCollection) => (
                  <li key={collection.id}>
                    <CollectionCard
                      title={collection.name}
                      owner={collection.user.name}
                      countMedia={collection._count.media}
                    />
                  </li>
                ))
              )}

              {!collections.isLoading && collections.data?.length === 0 && (

              <Title as="span" schema={500}>
                Não há nenhuma coleção cadastrada
              </Title>
              )}
            </ListCollection>

            <div className="actions">
              <Button>
                Adicionar
              </Button>

              <Button outline schemaColor="softGray" onClick={createCollectionModal.onOpen}>
                Criar Coleção
              </Button>
            </div>
          </Content>
        </ModalContainerCollection>
      </Overlay>
    </Portal>
  );
}
