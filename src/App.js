import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import ReactGA from "react-ga";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const TRACKING_ID = "UA-232790640-1";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
  }, []);
  return (
    <>
      <Navbar />
      <section id="home">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      <section id="contact">
        <Form />
      </section>
      <Footer />
    </>

  );
}

export default App;
