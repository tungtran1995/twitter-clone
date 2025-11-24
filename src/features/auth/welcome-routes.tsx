import { convertQueryClient } from '@/utils/convert-query-client';

import type { QueryClient } from '@tanstack/react-query';

export const authRoute = (queryClient: QueryClient) => ({
  path: '/',
  layout: 'root',
  children: [
    {
      index: true,
      lazy: () =>
        import('../../features/auth/welcome').then(
          convertQueryClient(queryClient),
        ),
    },
  ],
});
