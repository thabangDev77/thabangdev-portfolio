import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/projects/Project';
import Expertise from './components/expertise/Expertise';
import Blog from './components/articles/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function App() {

    const darkMode = <FontAwesomeIcon icon={faMoon} size="lg" />
    const lightMode = <FontAwesomeIcon icon={faSun} size="lg" />   
    return (
        <main>
            <div>
                {darkMode}
                {lightMode}
            </div>
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