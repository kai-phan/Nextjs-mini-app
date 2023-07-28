import React from 'react';

import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'antd';

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const changeTo = router.locale === 'en' ? 'vi' : 'en';

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Link href="/" locale={changeTo}>
        <Button>{t('test', { changeTo })}</Button>
      </Link>
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
