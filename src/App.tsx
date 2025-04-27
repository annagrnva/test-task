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
  const images = [
    {src: image1, name: "CASCATE DI TIVOLI"}, 
    {src: image2, name: "PORTRAIT OF VINCENT VAN GOGH"}, 
    {src: image3, name: "UNEQUAL MARRIAGE"}, 
    {src: image4, name: "THE HAPPY VIOLINIST"},
    {src: image5, name: "THE ARCADIAN"}, 
    {src: image6, name: "GOLFO DI NAPOLI"}, 
  ]


  return (
    <div className={styles.container}>
      <Header />
      <Search />
      <Gallery images={images}/>
    </div>
  )
}

export default App
