import Head from "next/head";
import { useTranslation } from 'next-i18next';

import Videos from '@/components/VideoPage/VideoPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            locale: locale
        },
    };
}


function Video({ locale }) {
    const { t } = useTranslation();
  return (
    <>
          <Head>
              <title>Видео Регистан</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content={t('titleCont')} />
          </Head>
      <Videos locale={locale}/>
    </>
  )
}

export default Video
