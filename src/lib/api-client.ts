import Axios, { type InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';
import { paths } from '@/config/paths';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.request.use((config) => {
  console.log('API Request:', {
    method: config.method,
    url: config.url,
    data: config.data,
  });
  return config;
});
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.data);
    return response;
  },
  (error) => {
    console.log('API Error:', error);
    if (error.response?.data === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = `${paths.home}?redirectTo=${redirectTo}`;
    }

    return Promise.reject(error);
  },
);
