// import React, { Children } from "react"
import styles from "./app.module.scss"
import { Header } from "./components"
import { Search } from "./components"
import { Gallery } from "./components"
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/image6.png"


function App() {
  const images = [image1, image2, image3, image4, image5, image6]

  return (
    <div className={styles.container}>
      <Header />
      <Search />
      <Gallery images={images}/>
    </div>
  )
}

export default App
