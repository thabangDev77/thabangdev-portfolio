import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import MoreAbout from './pages/moreAbout';
import MoreBlogs from './pages/moreBlogs';
import MoreProjects from './pages/moreProjects';
import Footer from './components/footer/Footer';
import './styles/theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function App() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const darkModeIcon = <FontAwesomeIcon icon={faMoon} size="lg" />
    const lightModeIcon = <FontAwesomeIcon icon={faSun} size="lg" />   
    
    
    return (
        <main className={`${isDarkMode ? 'dark-mode' : 'light-mode'} relative pt-2 min-h-screen transition-colors duration-500`}>
            <button className='absolute top-6 right-25 m-4' onClick={toggleTheme}>
                {isDarkMode ? lightModeIcon : darkModeIcon}
            </button>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<MoreAbout />} />
                <Route path="/blogs" element={<MoreBlogs />} />
                <Route path="/projects" element={<MoreProjects />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App