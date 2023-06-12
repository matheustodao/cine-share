'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.2rem;
  margin-top: 5%;
  height: 100%;
  padding: 0 2.4rem;

  .wrapper-image {
    position: relative;
    --width-image: 302px;
    --height-image: 236px;
    max-width: var(--width-image);
    max-height: var(--height-image);
    width: var(--width-image);
    height: var(--height-image);

    @media (min-width: 1000px) {
      --width-image: 480px;
      --height-image: 375.1px;
    }
  }

  h1, p {
    text-align: center;
  }

  p {
    line-height: 2.4rem;
    max-width: 45rem;
  }
`;
