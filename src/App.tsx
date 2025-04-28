// import React, { Children } from "react"
import styles from "./app.module.scss";
import { Header } from "./components";
import { Search } from "./components";
import { Gallery } from "./components";
import { Pagination } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
      <Gallery />
      <Pagination />
    </div>
  );
}

export default App;
