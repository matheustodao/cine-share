'use client';

import { cineShareApi } from 'infra/api/cineShareApi';
import { Center } from 'presentation/components/Center';
import { CineCard } from 'presentation/components/CineCard';
import { Link } from 'presentation/components/Link';
import { DeleteModal } from 'presentation/components/Modal/DeleteModal';
import { RedirectComponent } from 'presentation/components/RedictComponent';
import { Text } from 'presentation/components/Typography/Text';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CollectionUIProps } from 'types/presentation/collection';
import { useTranslation } from 'app/i18n';
import { CollectionFooter } from './components/Footer';
import { CollectionHeader } from './components/Header';
import { Container, Content } from './styles';

export function CollectionUI({ collection }: CollectionUIProps) {
  const [medias, setMedias] = useState(collection?.media ?? []);
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mediaNameBeingDelete, setMediaNameBeingDelete] = useState({ id: '', title: '' });
  const { t } = useTranslation('common');

  if (!collection) {
    return (
      <RedirectComponent route="/" toastMessage="Coleção não encontrada" />
    );
  }

  function handleOpenDeleteModal(title: string, id: string) {
    setMediaNameBeingDelete({ title, id });
    setModalDeleteIsVisible(true);
  }

  function handleCloseDeleteModal() {
    setModalDeleteIsVisible(false);
  }

  async function handleRemoveMediaOnCollection(id: string) {
    try {
      setIsLoading(true);
      await cineShareApi.delete(`/media/${id}`);

      setMedias((oldMedias) => oldMedias.filter((currentMedia) => (
        currentMedia.id === id
          ? null
          : currentMedia
      )));

      toast.success('Deletado com sucesso');
    } catch {
      toast.error('Tente novamente mais tarde');
    } finally {
      setMediaNameBeingDelete({ id: '', title: '' });
      setIsLoading(false);
      handleCloseDeleteModal();
    }
  }

  return (
    <Container>
      <CollectionHeader
        userEmail={collection.user.email}
        name={collection.name}
        description={collection.description}
        userId={collection.user.id}
      />

      <Content>
        {medias.map((item) => (
          <CineCard
            key={item.id}
            id={item.tmdb_id}
            image={item.poster_path}
            type={item.type}
            original_language={item.original_language}
            title={item.title}
            userEmail={collection.user.email}
            onDelete={() => handleOpenDeleteModal(item.title, item.id)}
          />
        ))}
      </Content>

      {(medias.length === 0 && !isLoading) && (
        <Center className="cta-no-data">
          <Text schema={600} as="p">
            {t('collection.view.noData.description')}
          </Text>

          <Link href="/">
            {t('collection.view.noData.cta')}
          </Link>
        </Center>
      )}

      <DeleteModal
        title={`${t('collection.view.deleteMedia.title')} ${mediaNameBeingDelete.title}?`}
        onClick={() => handleRemoveMediaOnCollection(mediaNameBeingDelete.id)}
        onClose={handleCloseDeleteModal}
        loading={isLoading}
        visible={modalDeleteIsVisible}
      />

      <CollectionFooter
        userEmail={collection.user.email}
        collectionId={collection.id}
        hasMedia={!!medias.length}
      />
    </Container>
  );
}
