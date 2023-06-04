import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 36.2rem;
  margin: auto;
  justify-content: center;
  align-self: center;
  margin-top: 32%;

  h1 {
    letter-spacing: 0.04em;
    margin-bottom: 4.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 36.2rem;
  width: 100%;

  gap: 1.2rem;

  > div, .actions > button, .actions > a {
    width: 100%;
    flex: 1;
  }

  .actions {
    a {
      margin-top: 1.2rem;
    }
    > button {
      margin-top: 1.5rem;
      max-height: 5.1rem;
      height: 5.1rem;
    }
  }
`;
