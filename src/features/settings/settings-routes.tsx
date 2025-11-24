import { SETTINGS } from '@/constants/path';
import { convertQueryClient } from '@/utils/convert-query-client';

import type { QueryClient } from '@tanstack/react-query';

export const createSettingsRoutes = (queryClient: QueryClient) => ({
  path: SETTINGS,
  layout: 'root',
  innerLayout: 'settings',
  children: [
    {
      index: true,
      lazy: () =>
        import('../../features/settings/account/account').then(
          convertQueryClient(queryClient),
        ),
    },
    {
      path: 'account',
      lazy: () =>
        import('../../features/settings/account/account').then(
          convertQueryClient(queryClient),
        ),
    },
  ],
});
