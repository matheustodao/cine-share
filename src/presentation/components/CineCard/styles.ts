import styled, { css } from 'styled-components';

interface WrapperImageProps {
  size?: 'large' | 'normal' | 'small'
}

const sizeImageVariant = {
  small: css`
    width: 10.7rem;
    height: 18.1rem;
  `,

  normal: css`
    width: 13rem;
    height: 20.5rem;
  `,

  large: css`
    width: 20rem;
    height: 30rem;
  `,
};

export const Container = styled.div(({ theme }) => `
  position: relative;
  width: fit-content;
  background: ${theme.colors.brand[400]};
  border-radius: ${theme.rounded.small};
  border: 1px solid;
  border-color: ${theme.colors.brand[400]};
  transition: all 0.320s ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`);

export const Content = styled.div(({ theme }) => `
  position: relative;

  > button {
    position: absolute;
    padding: 0.3rem;
    border-radius: ${theme.rounded.large};
    background: ${theme.colors.red[600]};
    z-index: 2;
    right: 0.6rem;
    top: 0.7rem;
    transition: all 0.320s ease-in-out;

    :hover {
      filter: brightness(0.9);
    }
  }
`);

export const WrapperImage = styled.div<WrapperImageProps>(({ theme, size = 'normal' }) => `
  position: relative;
  width: 13rem;
  height: 20.5rem;
  ${sizeImageVariant[size]};

  img {
    border-radius: ${theme.rounded.small};
  }

  @media (min-width: 1100px) {
    ${sizeImageVariant.large};
  }
`);
