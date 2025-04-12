import React, { useContext, useState, useRef } from 'react'
import '../navbar/Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("games")}}><Link style={{textDecoration: 'none'}} to='/games'>Games</Link>{menu==="games"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration: 'none'}} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("retro")}}><Link style={{textDecoration: 'none'}} to='/retro'>Retro</Link>{menu==="retro"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link> 
       <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
