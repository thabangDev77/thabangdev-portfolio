import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/projects/Project';
import Expertise from './components/expertise/Expertise';
import Blog from './components/articles/Blog';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Expertise />
      <Blog />
    </main>
    
  )
}

export default App