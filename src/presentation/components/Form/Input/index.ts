import styled from 'styled-components';

export const Input = styled.input(({ theme }) => `
  background: ${theme.colors.brand[900]};
  padding: 1.7rem 1.2rem;
  border-radius: ${theme.rounded.small};
  color: ${theme.colors.white};

  ::placeholder {
    color: ${theme.colors.whiteAlpha[700]};
  }
`);
