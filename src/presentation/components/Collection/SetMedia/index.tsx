import { X } from 'phosphor-react';

import { Overlay } from 'presentation/components/Overlay';
import { Portal } from 'presentation/components/Portal';
import { Title } from 'presentation/components/Typography/Title';

import { SetMediaCollectionModalProps } from 'types/presentation/collection';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'presentation/components/Button';
import { Loader } from 'presentation/components/Loader';
import { useSetMediaCollectionModalHandler } from 'presentation/handler/components/Collection/MediaModal';
import { SchemaSetMediaIntoCollection, validationSchemaSetMediaIntoCollection } from 'presentation/validations/collection/setMedia';
import { useForm } from 'react-hook-form';
import { ResponsesCollection } from 'types/server/collection';
import { CollectionCard } from '../Card';
import { CollectionModalCreate } from '../Create';
import { ModalContainerCollection } from '../styles/ModalContainer';
import { CheckboxElement } from './components/CheckboxElement';
import { Content, ListCollection } from './styles';

export function SetMediaCollectionModal({ visible, onClose }: SetMediaCollectionModalProps) {
  const { collections, createCollectionModal } = useSetMediaCollectionModalHandler();
  const { register, watch, handleSubmit } = useForm<SchemaSetMediaIntoCollection>({
    resolver: zodResolver(validationSchemaSetMediaIntoCollection),
  });

  const collectionsSelected = watch('collections');

  function setMediaIntoCollections(data: SchemaSetMediaIntoCollection) {
    console.log({ data });
  }

  function currentIsCollectionSelected(collectionId: string) {
    if (collectionsSelected?.length === 0 || typeof collectionsSelected === 'undefined') {
      return true;
    }

    const isSelectedCollection = collectionsSelected?.findIndex((item) => (
      item === collectionId
    ));

    return isSelectedCollection === -1;
  }

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

          <Content onSubmit={handleSubmit(setMediaIntoCollections)}>
            <ListCollection>
              {collections.isLoading && <Loader size={50} />}
              {!collections.isLoading && collections.data?.length > 0 && (
                collections.data.map((collection: ResponsesCollection) => (
                  <li key={collection.id}>
                    <CheckboxElement
                      isChecked={currentIsCollectionSelected(collection.id)}
                      {...register('collections')}
                      label={collection.id}
                      value={collection.id}
                    >
                      <CollectionCard
                        title={collection.name}
                        owner={collection.user.name}
                        countMedia={collection._count.media}
                      />
                    </CheckboxElement>
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
              <Button type="submit">
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
