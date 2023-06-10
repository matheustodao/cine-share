import styled from 'styled-components';

export const Container = styled.article`
  max-width: 50%;
  margin: auto;
  margin-top: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 4.2rem;

    button {
      height: 4.6rem;
    }
  }

  ul {
    list-style: none;

    li {
      a {
        text-decoration: none;
      }

      & + li {
        margin-top: 1.6rem;
      }
    }

  }
`;
