import styles from "./style.module.scss";
import icon from "./img/icon-1.png";

export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.relative}>
        <input
          className={styles.formSearch}
          type="text"
          placeholder="Painting title"
        />
        <img className={styles.icon} src={icon} alt="magnifier" />
      </div>
    </div>
  );
};
