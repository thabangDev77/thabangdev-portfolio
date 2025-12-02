import React from 'react'
import { Link } from 'react-scroll';

function NavLink() {
  return (
    <ul className='flex justify-around p-2 border-2 rounded-xl'>
        <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
        <li><Link to="about-me" smooth={true} duration={500} offset={-70}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="expertise" smooth={true} duration={500} offset={-70}>Expertise</Link></li>
        <li><Link to="blog" smooth={true} duration={500} offset={-70}>Blog</Link></li>
    </ul>
  )
}

export default NavLink