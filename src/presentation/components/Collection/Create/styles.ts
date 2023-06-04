import styled from 'styled-components';

export const Form = styled.form(({ theme }) => `
  .form-group {
    & + .form-group {
      margin-top: 2.4rem;
    }

    textarea {
      resize: none;
      height: 20.5rem;
      width: 100%;
      line-height: 2.4rem;
    }
  }
  .actions {
    display: flex;
    margin-top: 3.2rem;
    gap: 1.2rem;

    > button {
      border-radius: ${theme.rounded.small};
      height: 4.8rem;
    }
  }
`);
