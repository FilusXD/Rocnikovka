import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav_logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={navlogo} alt="" className="nav-logo" />
      <p>Admin Panel</p>
      </div>
    </div>
  )
}

export default Navbar
