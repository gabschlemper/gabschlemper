import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
