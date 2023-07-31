import React from 'react';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ConfigProvider } from 'antd';

import config from 'src/libs/react-query';
import theme from 'src/theme/config';

import 'src/styles/globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--roboto-font',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
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
      </Hydrate>
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
