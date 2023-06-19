import { NavRoute } from 'types/presentation/nav';

export const navRoutes: NavRoute[] = [
  {
    link: '/home',
    label: 'navigation.home',
    role: ['all'],
    active: false,
  },

  {
    link: '/collection/user',
    label: 'navigation.myCollections',
    role: ['private'],
    active: false,
  },

  {
    link: '/sign-up',
    label: 'navigation.signUp',
    role: ['all'],
    active: false,
  },

  {
    link: '/login',
    label: 'navigation.signIn',
    role: ['all'],
    active: false,
  },
];
