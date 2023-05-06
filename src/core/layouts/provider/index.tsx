import { ThemeProvider } from 'styled-components';

import { DEFAULT_THEME } from 'core/assets/styles/themes';
import { IChildren } from 'domain/core/core';

export function Provider({ children }: IChildren) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      {children}
    </ThemeProvider>
  );
}
