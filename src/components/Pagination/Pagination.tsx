import styles from "./style.module.scss";
import arrowLeft from "../../assets/images/arrow-left-pagination.svg";
import arrowRight from "../../assets/images/arrow-right-pagination.svg";
import { Paragraph } from "../Typography";
import { useState } from "react";

export const Pagination = () => {
  const totalPages = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Paragraph type="bigLight">
        <div className={styles.pagination}>
          <img
            src={arrowLeft}
            alt="arrowLeft"
            onClick={previousPage}
            // className={styles.pointer}
          />

          <div className={styles.number}>{currentPage}</div>

          <img
            src={arrowRight}
            alt="arrowRight"
            onClick={nextPage}
            // className={styles.pointer}
          />
        </div>
      </Paragraph>
    </>
  );
};
