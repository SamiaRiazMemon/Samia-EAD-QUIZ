// Navbar.js

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src='./barfilogo.jfif' alt='Bakery Logo' />
      </div>
      <div className='navbar-right'>
        <Link to='/home'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about-us'>About Us</Link>
      </div>
    </div>
  )
}

export default Navbar
