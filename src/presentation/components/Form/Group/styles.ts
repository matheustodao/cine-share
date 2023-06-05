import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: all 0.350s ease;
  width: auto;
`;

export const ErrorMessage = styled.small(({ theme }) => `
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight.regular};
  font-size: 1.2rem;
  color: ${theme.colors.red[500]};
  margin: 0.8rem 0;
`);
