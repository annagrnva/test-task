import styles from "./style.module.scss";
import { Caption } from "../Typography";
import { Heading } from "../Typography";

type Props = {
  //   children: React.ReactNode;
  image: string;
  title: string;
  date: string;
  hoverName: string;
  hoverDate: string;
};

export const Cards = ({ image, title, date, hoverName, hoverDate }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.lable}>
          <div className={styles.cardLine}></div>
          <div className={styles.cardInfo}>
            <Heading type="h1MediumUppercase" className={styles.cardTitle}>
              <span className={styles.originalText}>{title}</span>
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
