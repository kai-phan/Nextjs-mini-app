import { Axios, AxiosRequestConfig } from 'axios';

import Environment from 'src/utils/environment';

export default class Request extends Axios {
  constructor(config?: AxiosRequestConfig) {
    super({
      baseURL: Environment.API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    this.interceptors.request.use(
      (config) => {
        // TODO: Add token
        return config;
      },
      (config) => {},
    );
    this.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // TODO: Handle error
        return Promise.reject(error);
      },
    );
  }
}
