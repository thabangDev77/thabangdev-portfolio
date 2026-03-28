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

function App() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    return (
        <main className={`${isDarkMode ? 'dark-mode' : 'light-mode'} relative pt-2 min-h-screen transition-colors duration-500`}>
            <Navbar isDarkMode={isDarkMode} toggleThemeSetting={toggleTheme} />
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