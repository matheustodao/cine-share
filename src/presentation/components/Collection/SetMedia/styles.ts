import styled from 'styled-components';

export const Content = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.8rem;

  > article {
    flex: 1;
    width: 100%;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      height: 4.1rem;
      border-radius: 1rem;
    }
  }
`;

export const ListCollection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  padding-bottom: 2.4rem;

  max-height: 30rem;
  overflow-y: scroll;
  list-style: none;

  scroll-behavior: smooth;

  &, li {
    width: 100%;
  }
`;
