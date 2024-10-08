import React from "react"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import "./index.css"
import Body from "./components/body/Body"

const App = () => {
  return(
    <div className="App">
      <Navbar/>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
