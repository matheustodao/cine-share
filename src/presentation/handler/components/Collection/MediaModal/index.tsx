import { cineShareApi } from 'infra/api/cineShareApi';
import { useState } from 'react';
import { useQuery } from 'react-query';

export function useSetMediaCollectionModalHandler() {
  const [createCollectionModal, setCreateCollectionModal] = useState<boolean>(false);
  const { data, isLoading, refetch } = useQuery('collection-user-owner', () => cineShareApi.get('/collection/user'), {
    refetchOnMount: 'always',
    cacheTime: 60 * 60 * 6,
  });

  function handleOpenCreateCollectionModal() {
    setCreateCollectionModal(true);
  }

  function handleCloseCreateCollectionModal() {
    refetch();
    setCreateCollectionModal(false);
  }

  return {
    createCollectionModal: {
      isVisible: createCollectionModal,
      onOpen: handleOpenCreateCollectionModal,
      onClose: handleCloseCreateCollectionModal,
    },

    collections: {
      data: data?.data as any[],
      isLoading,
    },
  };
}
