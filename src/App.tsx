// import React, { Children } from "react"
import styles from "./app.module.scss";
import { Header } from "./components";
import { Search } from "./components";
import { Gallery } from "./components";
import { Pagination } from "./components";
// import { GalleryProvider } from "./context/GalleryContext";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
      {/* <GalleryProvider> */}
      <Gallery />
      {/* </GalleryProvider> */}
      <Pagination />
    </div>
  );
}

export default App;
