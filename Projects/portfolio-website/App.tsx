import React from "react";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Project";
import Contact from "./Contact";
import "./App.css"; // keep tutorial css or your styles

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;


