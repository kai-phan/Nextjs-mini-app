import React from 'react';

import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Button } from 'antd';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Button type="primary">{t('test')}</Button>
    </main>
  );
}

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
