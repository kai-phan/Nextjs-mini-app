import { QueryClientConfig } from '@tanstack/react-query';

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      onError: console.log,
    },
  },
};

export default config;
