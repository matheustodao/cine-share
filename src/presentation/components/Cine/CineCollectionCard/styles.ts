import styled from 'styled-components';

export const Container = styled.article(({ theme }) => `
  background: ${theme.colors.bg.card};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 3rem;
  padding: 0.8rem;

  .actions {
    button {
      border-radius: 100%;
      aspect-ratio: 1/1;
    }
  }
`);

export const Content = styled.div(({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  gap: 2.4rem;

  .image {
    overflow: hidden;
    position: relative;
    width: 7rem;
    height: 7rem;
    border-radius: ${theme.rounded.large};
    background: ${theme.colors.brand[100]};
    object-fit: cover;
    border: 1px solid ${theme.colors.brand[600]};
  }
`);
