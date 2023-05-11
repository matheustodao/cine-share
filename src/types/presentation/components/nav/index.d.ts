import { HeaderHandlerProps } from '../header';

export type RouteRoleType = keyof typeof RouteRole;

export interface NavRoute {
  link: string,
  label: string,
  role: RouteRoleType[],
  active: boolean,
}

export interface NavigationProps {
  shown: boolean,
  onClose: HeaderHandlerProps['handleCloseNavVisibility']
}
