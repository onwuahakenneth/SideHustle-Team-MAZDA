import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import style from './App.module.css'
import Home from "./Pages/Home";
const App = ()=>{
  
  

   
    return (
       <div className={style.app}>
           <NavBar />
           <Home />
           <Footer />
       </div>
    )
}

export default App;