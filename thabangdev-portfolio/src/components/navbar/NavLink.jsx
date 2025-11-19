import React from 'react'
import { Link } from 'react-router-dom';

function NavLink() {
  return (
    <ul className='flex justify-around p-2 border-2 rounded-xl'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/exprtise">Expertise</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </ul>
  )
}

export default NavLink