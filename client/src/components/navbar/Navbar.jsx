import React from 'react'
import '../navbar/Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Games</li>
        <li>Accessories</li>
        <li>Merch</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
