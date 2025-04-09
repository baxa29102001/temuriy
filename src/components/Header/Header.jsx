
import styles from './Header.module.css';
import classN from 'classnames';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

import En from '@/assets/img/en.jpg';
import Ru from '@/assets/img/ru.jpg';
import Uz from '@/assets/img/uz.jpg';
import { useTranslation } from 'next-i18next';



function Header() {
    const router = useRouter();
    // const { locale } = router;
    const { i18n } = useTranslation();

    const changeLng = async (lng, path) => {
        await i18n.changeLanguage(lng);
        router.push(path, path, { locale: lng });
    };

    return (
        <header className={styles.wrap}>
            <div className={styles.wrap_back}>
                <div className={styles.wrap_border}>
                    <div onClick={() => changeLng('uz', '/instruction')} className={classN(styles.uz, styles.d_f)}>
                        <div className={styles.hover}>
                            <div className={classN(styles.img, styles.img_uz)}>
                                <Image src={Uz}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="flag uz" />
                            </div>
                            <div>
                                <p className={styles.text}>O‘ZBEK</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => changeLng('ru', '/instruction')} className={classN(styles.ru, styles.d_f)}>
                        <div className={styles.hover}>
                            <div className={styles.img}>
                                <Image src={Ru}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="flag uz" />
                            </div>
                            <div className={styles.btn}>
                                <p className={styles.text}>РУССКИЙ</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => changeLng('en', '/instruction')} className={classN(styles.en, styles.d_f)}>
                        <div className={styles.hover}>
                            <div className={styles.img}>
                                <Image src={En}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="flag uz" />
                            </div>
                            <p className={styles.text}>ENGLISH</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header




{/* <Link href='/instruction' locale="ru"  className={classN(styles.ru, styles.d_f)}>
                <div>
                    <div className={styles.img}>
                        <Image src={Ru}
                            width={'auto'}
                            height={'auto'}
                            alt="flag ru" />
                    </div>
                    <p className={styles.text}>РУССКИЙ</p>
                </div>
            </Link> */}

{/* <Link href='/instruction' locale="en"  className={classN(styles.en, styles.d_f)}>
                <div>
                    <div className={styles.img}>
                        <Image src={En}
                            width={'auto'}
                            height={'auto'}
                            alt="flag en" />
                    </div>
                    <p className={styles.text}>ENGLISH</p>
                </div>
            </Link> */}

{/* <Link href='/instruction' locale="uz" className={classN(styles.uz, styles.d_f)}>
                <div>
                    <div className={styles.img}>
                        <Image src={Uz}
                            width={'auto'}
                            height={'auto'}
                            alt="flag uz" />
                    </div>
                    <p className={styles.text}>O‘ZBEK</p>
                </div>
            </Link> */}