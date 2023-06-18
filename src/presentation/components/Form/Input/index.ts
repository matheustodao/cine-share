import styled from 'styled-components';

export const Input = styled.input(({ theme }) => `
  background: ${theme.colors.brand[900]};
  padding: 1.7rem 1.2rem;
  border-radius: ${theme.rounded.small};
  color: ${theme.colors.white};

  ::placeholder {
    color: ${theme.colors.whiteAlpha[700]};
  }

  ::-webkit-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
  }
`);
