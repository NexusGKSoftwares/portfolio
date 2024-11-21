import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
);

export default App;
