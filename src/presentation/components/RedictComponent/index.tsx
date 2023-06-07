'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';
import { Loader } from '../Loader';

export function RedirectComponent({
  route, toastOptions, toastMessage,
}: { route: string, toastMessage: string, toastOptions?: ToastOptions }) {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push(route);
    toast(toastMessage, {
      type: 'info',
      ...toastOptions,
    });
  }, []);

  return (
    <Loader size={90} />
  );
}
