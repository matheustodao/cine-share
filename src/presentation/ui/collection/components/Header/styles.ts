import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  margin-top: 2.4rem;
  max-width: 90%;
  width: 100%;

  .info {
    &, > div:first-child {
      width: 100%;
      display: flex;
      align-items: center;
    }

    justify-content: center;

    > div:first-child {
      gap: 1.6rem;
    }

    button {
      background: none;
      margin-left: 3.2rem;
      padding: 0.8rem;
      border-radius: 1rem;
      transition: background 0.350s ease;

      :hover {
        background: rgba(241, 241, 241, 0.1);
      }
    }
  }

  p {
    margin-top: 2.4rem;
    max-width: 60%;
    word-break: break-all;
  }

  @media (max-width: 700px) {
    p {
      max-width: 100%;
    }
  }
`;
