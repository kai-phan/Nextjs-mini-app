import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const Environment = {
  API_URL: publicRuntimeConfig.API_URL,
  API_GOOGLE_URL: publicRuntimeConfig.API_GOOGLE_URL,
};
export default Environment;
