import { useMemo } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { createAppRouter } from './router-config';

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
