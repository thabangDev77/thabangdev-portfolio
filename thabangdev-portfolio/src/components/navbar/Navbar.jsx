import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isDarkMode, toggleThemeSetting }) {

    const toggleTheme = () => {
        toggleThemeSetting();
    }

    const darkModeIcon = <FontAwesomeIcon icon={faMoon} size="lg" />
    const lightModeIcon = <FontAwesomeIcon icon={faSun} size="lg" /> 

    return (
        <nav className='navbar flex justify-between gap-2 m-3 p-2 border-2 rounded-xl'>
            <h1 className='text-2xl font-bold italic mt-1'>Thabang.Dev</h1>
            <NavLink />
            <div className='flex gap-2'>
                <button className='m-4' onClick={toggleTheme}>
                    {isDarkMode ? lightModeIcon : darkModeIcon}
                </button>
                <button className='bg-blue-500'><Link to="contact-me" smooth={true} duration={500} offset={-70}>Contact</Link></button>
            </div>

        </nav>
  )
}

export default Navbar