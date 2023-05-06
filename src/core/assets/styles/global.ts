import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-size: ${theme.fonts.sizePoints};
  }

  body {
    background: ${theme.colors.bg.app};
    margin: 1.6rem
  }
`);
