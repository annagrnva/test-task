import styles from "./style.module.scss";
import { Caption } from "../Typography";
import { Heading } from "../Typography";

type Props = {
  //   children: React.ReactNode;
  image: string;
  name: string;
  date: number;
  hoverName: string;
  hoverDate: string;
};

export const Cards = ({ image, name, date, hoverName, hoverDate }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.cardImage} />
        <div className={styles.lable}>
          <div className={styles.cardLine}></div>
          <div className={styles.cardInfo}>
            <Heading type="h1MediumUppercase" className={styles.cardTitle}>
              <span className={styles.originalText}>{name}</span>
              <span className={styles.hoverText}>{hoverName}</span>
            </Heading>
            <Caption type="captionBoldUppercase12" className={styles.cardDate}>
              <span className={styles.originalDate}>{date}</span>
              <span className={styles.hoverDate}>{hoverDate}</span>
            </Caption>
          </div>
        </div>
      </div>
    </>
  );
};
