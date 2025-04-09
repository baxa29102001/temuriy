import styles from "./Card.module.css";
import Image from "next/image";

function Card({ image, title, text, className }) {
  return (
    <div className={styles.card} style={className}>
      <div className={styles.image}>
        <Image src={image} width={"auto"} height={"auto"} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
