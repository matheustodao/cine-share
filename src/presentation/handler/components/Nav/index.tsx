import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';
import { NavRoute, RouteRoleType } from 'types/presentation/nav';
import { navRoutes } from './routes';

export function useNavHandler() {
  const [routes] = useState(navRoutes as NavRoute[]);
  const [routesDynamicProtected, setRoutesDynamicProtected] = useState([] as NavRoute[]);
  const pathname = usePathname();
  const { status } = useSession();

  const settingRouteActive = useCallback((oldRoutes: NavRoute[]) => {
    const routeActive = oldRoutes.find((currentRoute) => (
      currentRoute.link.startsWith(pathname)
    ));

    if (!routeActive) {
      return oldRoutes;
    }

    const oldRouteActive = oldRoutes.findIndex(((item) => (
      item.active === true
    )));

    console.log({ oldRouteActive });

    const routeIndex = oldRoutes.findIndex(((item) => (
      item.link === routeActive.link && item.label === routeActive.label
    )));

    const newRoutes = oldRoutes;

    newRoutes[oldRouteActive] = {
      ...newRoutes[oldRouteActive],
      active: false,
    };

    newRoutes[routeIndex] = {
      ...routeActive,
      active: true,
    };

    return newRoutes;
  }, [pathname]);

  const mergeRoutes = (...roles: RouteRoleType[]) => {
    const mergedRoutes = navRoutes.map(({ role }) => (
      role.filter((item) => roles.includes(item))
    ));

    return mergedRoutes;
  };

  function isAllowedRoute(routeRole: RouteRoleType[], ...role: RouteRoleType[]) {
    const hasPermission = routeRole.some((currentRole) => role.includes(currentRole));

    return hasPermission;
  }

  const settingRoutesDynamicProtected = useCallback(() => {
    const rolesAllowed: RouteRoleType[] = [(status === 'authenticated' ? 'private' : 'public'), 'all'];

    routes.forEach((currentRoute) => {
      if (isAllowedRoute(currentRoute.role, ...rolesAllowed)) {
        setRoutesDynamicProtected((oldRoutes) => {
          const routeExists = oldRoutes?.find((item) => (
            item.label === currentRoute.label && item.link === currentRoute.link
          ));

          const newRoutes = settingRouteActive(oldRoutes);

          if (routeExists) return newRoutes;

          newRoutes.push(currentRoute);

          return newRoutes;
        });
      }
    });
  }, [routes, settingRouteActive, status]);

  useEffect(() => {
    settingRoutesDynamicProtected();
  }, [settingRouteActive, settingRoutesDynamicProtected, status]);

  return {
    mergeRoutes,
    isAllowedRoute,
    routes,
    routesDynamicProtected,
  };
}
