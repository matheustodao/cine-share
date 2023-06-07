import styled from 'styled-components';

export const Content = styled.div(({ theme }) => `
  .swiper {
    padding: 2.4rem 1.2rem;

    .swiper-slide {
      width: auto;
    }

    .swiper-button-prev, .swiper-button-next {
      box-sizing: border-box;
      color: ${theme.colors.white};
      padding: 2.4rem;
      height: 80%;
      top: 50%;
      transform: translateY(-42%);
      transition: all 0.250s ease-in-out;
      opacity: 0;
      border-radius: ${theme.rounded.small};

      :hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`);
