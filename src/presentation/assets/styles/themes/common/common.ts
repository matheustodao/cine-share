import { brandColor } from './brandColor';

export const commonStyles = {
  fonts: {
    title: {
      family: 'var(--title-font)',
      weight: {
        bold: '700',
        semi: '600',
        medium: '500',
      },
    },

    body: {
      family: 'var(--body-font)',
      weight: {
        regular: '400',
        light: '300',
        xlight: '200',
      },
    },

    sizePoints: '62.5%',

    sizes: {
      small: '1.4rem',
      xs: '1.2rem',
      medium: '1.6rem',
      xm: '1.8rem',
      large: '2.4rem',
      xl: '3.2rem',
      xxl: '4.8rem',
      display: '6.4rem',
    },
  },

  rounded: {
    small: '1rem',
    medium: '1.2rem',
    large: '2rem',
  },

  colors: {
    red: {
      900: '#C52233',
      800: '#C73443',
      700: '#D93849',
      600: '#E54354',
      500: '#F8495C',
    },

    blue: {
      900: '#135ED3',
      800: '#1967E1',
      700: '#1967E1',
      600: '#2772E7',
      500: '#2874EC',
      400: '#357DED',
      300: '#5891E9',
      200: '#8AB4F5',
      100: '#BDD5F9',
    },

    white: {
      900: '#FFFFFF',
    },

    brand: brandColor,
  },
};
