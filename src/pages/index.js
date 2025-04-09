import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Header from '@/components/Header/Header'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title')}</title>
  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={t('titleCont')} />
      

      </Head>
      <Header />
    </>
  );
}
