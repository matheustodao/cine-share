import { NavRoute } from 'types/presentation/nav';

export const navRoutes: NavRoute[] = [
  {
    link: '/',
    label: 'Home',
    role: ['all'],
    active: false,
  },

  {
    link: '/about',
    label: 'Sobre',
    role: ['all'],
    active: false,
  },

  {
    link: '/collection/user',
    label: 'Minhas Coleções',
    role: ['private'],
    active: false,
  },

  {
    link: '/sign-up',
    label: 'Cadastrar',
    role: ['all'],
    active: false,
  },

  {
    link: '/login',
    label: 'Login',
    role: ['all'],
    active: false,
  },
];
