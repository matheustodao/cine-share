import styled from 'styled-components';

export const ModalContainerCollection = styled.div<{ maxWidth?: string }>(({ theme, maxWidth }) => `
  max-width: ${maxWidth || '50vw'};
  background: ${theme.colors.bg.content};
  border-radius: ${theme.rounded.medium};
  width: 100%;
  padding: 3.4rem 2.4rem;

  .header {
    padding-bottom: 1rem;
    margin-bottom: 4.2rem;
    border-bottom: 1px solid ${theme.colors.grey['300/30']};
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      line-height: 0;
      border-radius: 100%;
      font-size: 2rem;
      background: transparent;
      padding: 0.8rem;
      cursor: pointer;
      color: ${theme.colors.white};
    }
  }

  @media (max-width: 745px) {
    max-width: 90%;

    .actions {
      flex-wrap: wrap;
      gap: 1.4rem;
      > button {
        width: 100%;
      }
    }
  }
`);
