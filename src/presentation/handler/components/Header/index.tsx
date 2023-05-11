import { useState } from 'react';
import { HeaderHandlerProps } from 'types/presentation/components/header';

export function useHeaderHandler(): HeaderHandlerProps {
  const [navIsVisible, setNavIsVisible] = useState<boolean>(false);

  function handleToggleNavVisibility() {
    setNavIsVisible((oldState) => !oldState);
  }

  function handleCloseNavVisibility() {
    setNavIsVisible(false);
  }

  return {
    navIsVisible,
    handleCloseNavVisibility,
    handleToggleNavVisibility,
  };
}
