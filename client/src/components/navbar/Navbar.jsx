import React, { useContext, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import '../navbar/Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const location = useLocation();
  const path = location.pathname;


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>PLAYZONE</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{path === '/' ? <hr /> : <></>}</li>
        <li><Link style={{ textDecoration: 'none' }} to='/games'>Games</Link>{path === '/games' ? <hr /> : <></>}</li>
        <li><Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>{path === '/accessories' ? <hr /> : <></>}</li>
        <li><Link style={{ textDecoration: 'none' }} to='/retro'>Retro</Link>{path === '/retro' ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace('/');
          }}>
            Logout
          </button>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
