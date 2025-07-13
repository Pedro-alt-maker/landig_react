import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Section/Home.jsx";
import Cardapio from "./Components/Section/Cardapio.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Cardapio />
      </main>
      <Footer/>
       </div>
  );
}

export default App;
