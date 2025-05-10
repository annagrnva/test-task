import styles from "./style.module.scss";
import icon from "./img/icon-1.png";
import axios from "axios";
import { BASE_BACKEND_URL, REQUEST_URLS } from "../../constants";
import { useState } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    axios.get(`${REQUEST_URLS.PAINTINGS}?q=${value} `).then((response) => {
      setSearchValue(response.data);
      console.log(setSearchValue);
    });
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.relative}>
        <input
          className={styles.formSearch}
          type="text"
          placeholder="Painting title"
          value={searchValue}
          onChange={handleSearch}
        />
        <img
          className={styles.icon}
          src={icon}
          alt="magnifier"
          onClick={() => handleSearch(searchValue)}
        />
      </div>
    </div>
  );
};
