import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { NavRoute, RouteRoleType } from 'types/presentation/components/nav';
import { navRoutes } from './routes';

export function useNavHandler() {
  const [routes, setRoutes] = useState(navRoutes as NavRoute[]);
  const [routesDynamicProtected, setRoutesDynamicProtected] = useState([] as NavRoute[]);
  const pathname = usePathname();

  const settingRouteActive = useCallback(() => {
    setRoutes((oldRoutes) => {
      const path = pathname.length !== 1
        ? pathname.split('/').at(1)
        : pathname;

      const routeActive = oldRoutes.find((currentRoute) => (
        currentRoute.link === path
      ));

      if (!routeActive) {
        return oldRoutes;
      }

      const routeIndex = oldRoutes.findIndex(((item) => (
        item.link === routeActive.link && item.label === routeActive.label
      )));

      const newRoutes = oldRoutes;

      newRoutes[routeIndex] = {
        ...routeActive,
        active: true,
      };

      return newRoutes;
    });
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

  const settingRoutesDynamicProtected = useCallback((...rolesAllowed: RouteRoleType[]) => {
    routes.forEach((currentRoute) => {
      if (isAllowedRoute(currentRoute.role, ...rolesAllowed)) {
        setRoutesDynamicProtected((oldRoutes) => {
          const routeExists = oldRoutes?.find((item) => (
            item.label === currentRoute.label && item.link === currentRoute.link
          ));

          const newRoutes = [...oldRoutes];

          if (routeExists) return newRoutes;

          newRoutes.push(currentRoute);

          return newRoutes;
        });
      }
    });
  }, [routes]);

  useEffect(() => {
    settingRouteActive();
    settingRoutesDynamicProtected('public', 'all');
  }, []);

  return {
    mergeRoutes,
    isAllowedRoute,
    routes,
    routesDynamicProtected,
  };
}
