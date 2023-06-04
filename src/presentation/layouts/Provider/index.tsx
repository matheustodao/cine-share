import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'presentation/assets/styles/global';
import { DEFAULT_THEME } from 'presentation/assets/styles/themes';
import { queryClient } from 'presentation/libs/queryClient';
import { IProviderProps } from 'types/presentation/core';

import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from 'presentation/context/AuthContext';

import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

export function Provider({ children, session }: IProviderProps) {
  return (
    <SessionProvider session={session}>
      <AuthContextProvider>
        <ThemeProvider theme={DEFAULT_THEME}>
          <QueryClientProvider client={queryClient}>
            <div>
              <GlobalStyle />
              {children}
            </div>
            <ToastContainer theme="dark" position="top-left" />
          </QueryClientProvider>
        </ThemeProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
}
