export type RouteRoleType = keyof typeof RouteRole;

export interface NavRoute {
  link: string,
  label: string,
  role: RouteRoleType[],
  active: boolean,
}
