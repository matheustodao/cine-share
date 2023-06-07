'use client';

import { useEffect, useRef, useState } from 'react';
import { UsePortalHandlerProps } from 'types/presentation/portal';

export function usePortalHandler({ selector }: UsePortalHandlerProps) {
  const refElement = useRef(null as Element | null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (selector) {
      const elementExists = document.querySelector(selector);
      refElement.current = elementExists;
    }

    if (!refElement.current) {
      const element = document?.createElement('div');
      element.setAttribute('id', selector || 'portal');

      document.body.appendChild(element);
      refElement.current = element;
    }

    setMounted(true);
  }, [selector]);

  return {
    element: refElement.current,
    mounted,
  };
}
