import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Header/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Portfolio from "./Components/Portfolio/Portfolio";
import Getintouch from "./Components/Getintouch/Getintouch";
import Footer from "./Components/Footer/Footer";
import Backtotop from "./Components/Backtotop";

function App() {
  return (
    <div className=" bg-zinc-100 dark:bg-slate-900">
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Getintouch />
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;
