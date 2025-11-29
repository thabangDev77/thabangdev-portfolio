import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/projects/Project';
import Expertise from './components/expertise/Expertise';
import Blog from './components/articles/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Expertise />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

export default App