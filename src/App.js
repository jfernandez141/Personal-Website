import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
