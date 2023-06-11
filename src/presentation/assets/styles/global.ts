import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;

    ::-webkit-scrollbar {
      width: 0.2rem;
    }

    ::-webkit-scrollbar:horizontal {
      height: 0.2rem;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }

    ::-moz-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.brand[800]};
      width: 2px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.brand[300]};
    }

    :focus-visible {
      outline: thin solid ${theme.colors.grey['300/30']};
      outline-offset: 0.2rem;
    }
  }

  :root {
    font-size: ${theme.fonts.sizePoints};
  }

  body {
    background: ${theme.colors.bg.app};
    margin: 1.6rem;
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.title.family};
    color: ${theme.colors.white};
  }

  button {
    cursor: pointer;
  }

  .cta-no-data {
    width: 80%;
    margin: auto;

    p {
      text-align: center;
      margin-bottom: 3.2rem;
    }
  }

  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: all 5000s ease-in-out 0s;
    }
  }
`);
