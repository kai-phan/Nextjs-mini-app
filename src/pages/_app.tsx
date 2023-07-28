import React from 'react';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

import { ConfigProvider } from 'antd';

import theme from 'src/theme/config';

import 'src/styles/globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--roboto-font',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider
    theme={{
      ...theme,
      token: { ...theme.token, fontFamily: roboto.style.fontFamily },
    }}
  >
    <div className={roboto.variable}>
      <Component {...pageProps} />
    </div>
  </ConfigProvider>
);

export default appWithTranslation(App);
