import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";
import Cookies from "js-cookie"

const App = () => {

  const [darkMode, setDarkMode] = useState(
    Cookies.get("dark-mode") === "true"? true : false
  );

  const alterarDarkMode = () => {
    setDarkMode(!darkMode);

    if(darkMode){
      Cookies.set("dark-mode", false);
    }else{
      Cookies.set("dark-mode", true);
    }
  };

  return (
    <div className={`main ${darkMode ? 'modo-escuro' : ''}`}>
      <Header/>
      <Contador/>
      Alterar cor de Fundo
      <button onClick={alterarDarkMode}>Alterar</button>
      <Footer/>
    </div>
  );
};

export default App;