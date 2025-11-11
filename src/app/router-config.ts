import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './layouts/root';

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const createAppRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    // Auth routes - no layout, no side menu
    {
      path: '/',
      lazy: () => import('../features/auth/welcome').then(convert(queryClient)),
    },

    {
      path: '/login',
      lazy: () => import('../features/auth/login').then(convert(queryClient)),
    },
    // Main app routes - with layout and side menu
    {
      path: '/home',
      Component: RootLayout,
      children: [
        {
          index: true,
          lazy: () =>
            import('../features/home/home').then(convert(queryClient)),
        },
      ],
    },
  ]);
};
