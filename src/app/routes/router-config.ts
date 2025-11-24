import { createBrowserRouter } from 'react-router';

import { Layouts, type LayoutKey } from '@/components/layouts/layouts';
import { authRoute } from '@/features/auth/welcome-routes';
import { homeRoute } from '@/features/home/home-routes';
import { createSettingsRoutes } from '@/features/settings/settings-routes';

import { profileRoute } from '@/features/profile/profile-routes';
import type { QueryClient } from '@tanstack/react-query';
import type { RouteObject } from 'react-router';

interface RouteChild {
  path?: string;
  index?: boolean;
  lazy: () => Promise<{
    default: React.ComponentType<Record<string, unknown>>;
  }>;
}

interface RouteConfig {
  path?: string;
  layout?: string;
  innerLayout?: string;
  children?: RouteChild[];
}

type RouteConfigWithLayout = RouteConfig & {
  path: string;
  layout: LayoutKey;
};

const hasLayout = (route: RouteConfig): route is RouteConfigWithLayout =>
  Boolean(route.path && route.layout && route.layout in Layouts);

function convertRoutes(queryClient: QueryClient) {
  const routeConfigs: RouteConfig[] = [
    homeRoute(queryClient),
    authRoute(queryClient),
    profileRoute(queryClient),
    createSettingsRoutes(queryClient),
  ];

  return routeConfigs.filter(hasLayout).map((route) => {
    const OuterLayout = Layouts[route.layout] || Layouts.root;
    const InnerLayout =
      route.innerLayout && route.innerLayout in Layouts
        ? Layouts[route.innerLayout as LayoutKey]
        : null;
    const childRoutes = route.children?.map((child) => ({
      ...(child.index ? { index: true as const } : { path: child.path }),
      lazy: child.lazy,
    }));

    // nếu có innerLayout → sinh nested layout
    if (InnerLayout) {
      return {
        path: route.path,
        Component: OuterLayout,
        children: [
          {
            Component: InnerLayout,
            children: childRoutes,
          },
        ],
      };
    }

    return {
      path: route.path,
      Component: OuterLayout,
      children: childRoutes,
    };
  });
}

export const createAppRouter = (queryClient: QueryClient) => {
  const routes = convertRoutes(queryClient) as RouteObject[];
  return createBrowserRouter(routes);
};
