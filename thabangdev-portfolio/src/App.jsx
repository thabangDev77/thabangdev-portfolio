import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/projects/Project';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Project />
    </main>
    
  )
}

export default App