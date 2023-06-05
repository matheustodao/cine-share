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
      family: 'var(--text-font)',
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

  zIndex: {
    small: 30,
    medium: 50,
    large: 100,
    xl: 150,
    xxl: 200,
    '3xl': 250,
    '4xl': 300,
    '5xl': 350,
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

    white: '#FFFFFF',

    whiteAlpha: {
      900: '#FFFFFF',
      700: 'rgba(255, 255, 255, 0.8)',
    },

    brand: brandColor,

    blackAlpha: {
      50: 'rgba(155, 155, 155, 0.1)',
    },
  },
};
