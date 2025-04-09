import styles from './CardDuplImg.module.css';

import Image from "next/image";

function CardDuplImg({ image, title, text, imageDupl }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={image}
                    width={'auto'}
                    height={'auto'}
                    alt="icon" />
                <div className={styles.stick}></div>
                <Image src={imageDupl}
                    width={'auto'}
                    height={'auto'}
                    alt="icon" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default CardDuplImg
