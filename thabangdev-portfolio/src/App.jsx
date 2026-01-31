import React from 'react'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/projects/Project';
import Expertise from './components/expertise/Expertise';
import Blog from './components/articles/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './styles/theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const darkModeIcon = <FontAwesomeIcon icon={faMoon} size="lg" />
    const lightModeIcon = <FontAwesomeIcon icon={faSun} size="lg" />   
    
    
    return (
        <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div>
                {darkModeIcon}
                {lightModeIcon}
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