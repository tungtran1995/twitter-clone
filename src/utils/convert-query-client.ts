import { QueryClient } from '@tanstack/react-query';

export const convertQueryClient =
  (queryClient: QueryClient) => (module: any) => {
    const { clientLoader, clientAction, default: Component, ...rest } = module;

    return {
      ...rest,
      loader: clientLoader ? clientLoader(queryClient) : undefined,
      action: clientAction ? clientAction(queryClient) : undefined,
      Component,
    };
  };
