import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App () {
  return (
    <>
    <Navbar />
    <Hero /> 
    <Projects /> 
    <Dashboard />
    <Contact />
    <Footer /> 
    </>
  );
}

export default App;