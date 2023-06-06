import styled from 'styled-components';

export const Nav = styled.header`
  height: 5.2rem;
`;

export const Container = styled.div(({ theme }) => `
  width: 100%;
  min-height: 96vh;
  background: ${theme.colors.bg.app};
  display: flex;
  flex-direction: column;

  border-bottom-left-radius: ${theme.rounded.large};
  border-bottom-right-radius: ${theme.rounded.large};
`);

export const Content = styled.main(({ theme }) => `
  margin-top: 1.6rem;
  background: ${theme.colors.bg.content};
  flex: 1;
  border-radius: ${theme.rounded.large};

  padding: 1.6rem 1.2rem;
`);
