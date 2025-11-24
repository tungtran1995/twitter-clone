import { HOME } from '@/constants/path';
import { convertQueryClient } from '@/utils/convert-query-client';

import type { QueryClient } from '@tanstack/react-query';

export const homeRoute = (queryClient: QueryClient) => ({
  path: HOME,
  layout: 'root',
  children: [
    {
      index: true,
      lazy: () =>
        import('../../features/home/home').then(
          convertQueryClient(queryClient),
        ),
    },
  ],
});
