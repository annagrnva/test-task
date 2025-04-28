import styles from "./style.module.scss";
import arrowLeft from "../../assets/images/arrow-left-pagination.svg";
import arrowRight from "../../assets/images/arrow-right-pagination.svg";
import { Paragraph } from "../Typography";

export const Pagination = () => {
  return (
    <>
      <Paragraph type="bigLight">
        <div className={styles.pagination}>
          <img src={arrowLeft} alt="arrowLeft" />
          <div className={styles.number}>1</div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </Paragraph>
    </>
  );
};
