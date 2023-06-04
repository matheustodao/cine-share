import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
  max-width: 50vw;
  background: ${theme.colors.bg.content};
  border-radius: ${theme.rounded.medium};
  width: 100%;
  padding: 3.4rem 2.4rem;

  .header {
    padding-bottom: 1rem;
    margin-bottom: 4.2rem;
    border-bottom: 1px solid ${theme.colors.grey['300/30']};
  }
`);

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
