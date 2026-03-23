import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

function NavLink() {
  return (
    <ul className='flex justify-around font-bold p-2 gap-4 lg:gap-10 border-2 rounded-xl'>
        <li><RouterLink to="/" >Home</RouterLink></li>
        <li><ScrollLink to="about-me" smooth={true} duration={500} offset={-70}>About</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500} offset={-70}>Projects</ScrollLink></li>
        <li><ScrollLink to="expertise" smooth={true} duration={500} offset={-70}>Expertise</ScrollLink></li>
        <li><ScrollLink to="blog" smooth={true} duration={500} offset={-70}>Blog</ScrollLink></li>
    </ul>
  )
}

export default NavLink