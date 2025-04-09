import Ins from '@/components/Instruction/Instruction';
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale: locale
    },
  };
}

function Instruction() {
  const { t } = useTranslation();
  return (
<>
      <Head>
        <title>{t('titleIns')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('titleCont')} />
        
      </Head>
      <Ins />
</>
  )
}

export default Instruction
