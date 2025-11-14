import type { UserResponse } from './user';

export type AuthResponse = {
  jwt: string;
  user: UserResponse;
};
