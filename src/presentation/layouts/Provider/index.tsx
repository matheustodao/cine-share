import { Lato, Sora } from 'next/font/google';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'presentation/assets/styles/global';
import { DEFAULT_THEME } from 'presentation/assets/styles/themes';
import { queryClient } from 'presentation/libs/queryClient';
import { IChildren } from 'types/presentation/core';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

const lato = Lato({
  subsets: ['latin'],
  variable: '--text-font',
  fallback: ['sans serif'],
  weight: ['700', '400', '900'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--title-font',
  fallback: ['sans serif'],
  weight: ['700', '600', '500', '400'],
});

export function Provider({ children }: IChildren) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <QueryClientProvider client={queryClient}>
        <div className={`${lato.variable} ${sora.variable}`}>
          <GlobalStyle />
          {children}
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
