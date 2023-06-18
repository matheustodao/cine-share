import { Input } from 'presentation/components/Form/Input';

import styled, { css } from 'styled-components';

export const Container = styled.article`
  max-width: 127rem;
  margin: auto;

  header {
    margin-bottom: 3.2rem;
  }

  .btn-loader {
    margin: 3.2rem auto;
    height: 4rem;
    border-radius: 0.8rem;
  }
`;

export const InputWrapper = Input.withComponent(styled.label(({ theme }) => css`
  display: flex;
  gap: 0.8rem;
  border: 1px solid transparent;

  :focus-within {
    border: 1px solid ${theme.colors.brand[500]};
  }

  input {
    background: none;
    padding: 0;
    border-radius: none;
    width: 100%;
    border-radius: 0;

    :focus-visible {
      outline: none;
    }
  }
`));

export const MediaList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.7rem, 20rem));
  grid-gap: 1.2rem;
`;
