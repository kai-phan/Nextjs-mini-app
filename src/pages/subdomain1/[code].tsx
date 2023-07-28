import React from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CodeContainer from 'src/containers/subdomain1/CodeContainer';

export default function DetailPage({ code }) {
  return (
    <div>
      <CodeContainer />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      code: 'code',
    },
  };
}
