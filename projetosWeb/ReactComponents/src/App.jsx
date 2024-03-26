import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const alterarDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <div className={darkMode ? 'modo-escuro' : ''}>
      <Header/>
      <Contador/>
      Alterar cor de Fundo
      <button onClick={alterarDarkMode}>Alterar</button>
      <Footer/>
    </div>
  );
};

export default App;