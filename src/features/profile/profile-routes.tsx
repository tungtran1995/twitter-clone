import { PROFILE } from '@/constants/path';
import { convertQueryClient } from '@/utils/convert-query-client';

import type { QueryClient } from '@tanstack/react-query';

export const profileRoute = (queryClient: QueryClient) => ({
  path: `${PROFILE}/:id`,
  layout: 'root',
  children: [
    {
      index: true,
      lazy: () =>
        import('./profile').then(
          convertQueryClient(queryClient),
        ),
    },
  ],
});
