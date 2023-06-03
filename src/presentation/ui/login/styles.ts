import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 36.2rem;
  margin: auto;
  height: 80vh;
  justify-content: center;

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

  input, button {
    width: 100%;
  }

  button {
    margin-top: 1.5rem;
  }
`;
