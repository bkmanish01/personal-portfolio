import React from 'react'
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Testimonial from './components/projects/Testimonial';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
