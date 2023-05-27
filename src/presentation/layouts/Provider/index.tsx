import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'presentation/assets/styles/global';
import { DEFAULT_THEME } from 'presentation/assets/styles/themes';
import { IChildren } from 'types/presentation/core';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

export function Provider({ children }: IChildren) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
