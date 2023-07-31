const { i18n } = require('./next-i18next.config');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  return {
    reactStrictMode: phase === PHASE_PRODUCTION_BUILD,
    i18n,
    publicRuntimeConfig: {
      ...process.env,
    },
  };
};

module.exports = nextConfig;
