import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export function useCineCardHandler() {
  const [addMediaCollectionModal, setAddMediaCollectionModal] = useState<boolean>(false);
  const { status, data } = useSession();
  const router = useRouter();

  function handleOpenAddMediaCollectionModal() {
    if (status === 'unauthenticated') {
      toast.info('Realiza o login e começa compartilhar suas recomendações com seus amigos!', {
        position: 'top-center',
      });
      return router.push('/login');
    }
    setAddMediaCollectionModal(true);
  }

  function handleCloseAddMediaCollectionModal() {
    setAddMediaCollectionModal(false);
  }

  return {
    addMediaCollectionModal,
    handleOpenAddMediaCollectionModal,
    handleCloseAddMediaCollectionModal,
    session: {
      status,
      userEmail: data?.user?.email,
    },
  };
}
