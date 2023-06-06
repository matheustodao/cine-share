import styled from 'styled-components';

export const Container = styled.footer(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  position: fixed;
  bottom: 4.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 2.4rem;
  background: ${theme.colors.bg.content};
  z-index: 3;
  border-radius: ${theme.rounded.small};

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`);
