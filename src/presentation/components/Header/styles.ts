import styled from 'styled-components';

export const Container = styled.header`
  position: relative;

  display: flex;
  align-items: center;

  height: 5.4rem;
`;

export const Content = styled.div(({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.bg.app};
  padding: 1.2rem 2.4rem;

  border-radius: ${theme.rounded.large};

  width: 100%;
  max-width: 69rem;

  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
`);

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 2.4rem;
`;

export const IconButton = styled.button`
  background: none;
`;
