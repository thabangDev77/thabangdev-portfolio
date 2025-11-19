import React from 'react'
import NavLink from './NavLink'

function Navbar() {
  return (
    <nav className='grid grid-flow-col gap-2 m-3 p-2 border-2 rounded-xl'>
        <h1 className='text-2xl font-bold italic mt-1'>Thabang.Dev</h1>
        <NavLink />
        <button className='border rounded-2xl m-1 p-1 bg-blue-500'>Contact</button>
    </nav>
  )
}

export default Navbar