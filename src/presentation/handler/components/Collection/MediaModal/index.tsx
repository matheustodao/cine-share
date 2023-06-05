import { cineShareApi } from 'infra/api/cineShareApi';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export function useSetMediaCollectionModalHandler(visible: boolean) {
  const [createCollectionModal, setCreateCollectionModal] = useState<boolean>(false);
  const { data, isLoading, refetch } = useQuery('collection-user-owner', () => cineShareApi.get('/collection/user'), {
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
  });

  const onRefetchCollection = useCallback(() => {
    if (visible) {
      refetch();
    }
  }, [visible, refetch]);

  function handleOpenCreateCollectionModal() {
    setCreateCollectionModal(true);
  }

  function handleCloseCreateCollectionModal() {
    refetch();
    setCreateCollectionModal(false);
  }

  useEffect(() => {
    onRefetchCollection();
  }, [onRefetchCollection]);

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
