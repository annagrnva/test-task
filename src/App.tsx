import React, { Children } from "react"
import styles from "./app.module.scss"
import { Header } from "./components"

 

function App() {
  
  return (
    <div className={styles.container}>
      <Header />
  </div>
  )
}

export default App
