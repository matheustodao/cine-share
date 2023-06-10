import styled from 'styled-components';

export const Container = styled.article`
  margin: auto;
  margin-top: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2.4rem;

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

  .cta-no-data {
    width: 80%;
    margin: auto;

    p {
      text-align: center;
      margin-bottom: 3.2rem;
    }
  }

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;
