import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-natural">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
