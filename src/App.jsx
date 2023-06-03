import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Card from "./components/Card"
import Ocr from "./components/Ocr";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Card />
        {/* <Ocr /> */}

      </div>
    </main>
  );
};

export default App;
