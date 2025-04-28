import styles from "./style.module.scss";
import { Caption } from "../Typography";
import { Heading } from "../Typography";

type Props = {
  //   children: React.ReactNode;
  image: string;
  name: string;
  date: number;
};

export const Cards = ({ image, name, date }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.cardImage} />
        <div className={styles.lable}>
          <div className={styles.cardLine}></div>
          <div className={styles.cardInfo}>
            <Heading type="h1MediumUppercase" className={styles.cardTitle}>
              {name}
            </Heading>
            <Caption type="captionBoldUppercase12" className={styles.cardDate}>
              {date}
            </Caption>
          </div>
        </div>
      </div>
    </>
  );
};
