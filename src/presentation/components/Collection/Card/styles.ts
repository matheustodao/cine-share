import styled from 'styled-components';

export const Container = styled.article(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  background: ${theme.colors.bg.card};
  padding: 1rem 1.3rem;
  border-radius: ${theme.rounded.medium};
`);

export const Icon = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.1rem;
  height: 8.1rem;
  border-radius: ${theme.rounded.small};
  color: rgba(228, 223, 246, 0.67);
`);

export const Content = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    strong, small {
      :first-letter {
        text-transform: uppercase;
      }
    }

    strong {
      color: ${theme.colors.text[900]};
    }

    small {
      color: ${theme.colors.text[500]};
    }
  }

  .footer {
    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.6rem;
      color: ${theme.colors.blue[300]};
    }
  }
`);
