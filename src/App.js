import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Header/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Portfolio from "./Components/Portfolio/Portfolio";
import Getintouch from "./Components/Getintouch/Getintouch";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Getintouch />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
