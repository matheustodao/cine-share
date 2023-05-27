import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  header {
    button {
      background: none;

      small {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
