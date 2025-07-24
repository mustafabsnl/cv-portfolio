import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import References from './components/References';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-200 via-70% via-gray-100 to-gray-700" style={{background: 'linear-gradient(115deg, #34d399 0%, #bbf7d0 70%, #f3f4f6 85%, #374151 100%)'}}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;
