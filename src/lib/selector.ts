import { useQuery } from '@tanstack/react-query';

import { getUser } from './auth';
const AUTH_USER_QUERY_KEY = ['auth-user'];

export const useUserAvatar = () => {
  return useQuery({
    queryKey: AUTH_USER_QUERY_KEY,

    queryFn: getUser,

    select: (data) => {
      return data.user.avatar || null;
    },
  });
};
