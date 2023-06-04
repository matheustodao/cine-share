import { useState } from 'react';

export function useCineCardHandler() {
  const [addMediaCollectionModal, setAddMediaCollectionModal] = useState<boolean>(false);

  function handleOpenAddMediaCollectionModal() {
    setAddMediaCollectionModal(true);
  }

  function handleCloseAddMediaCollectionModal() {
    setAddMediaCollectionModal(false);
  }

  return {
    addMediaCollectionModal,
    handleOpenAddMediaCollectionModal,
    handleCloseAddMediaCollectionModal,
  };
}
