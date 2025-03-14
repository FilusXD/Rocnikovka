import React, { useState } from 'react'
import '../navbar/Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("games")}}><Link style={{textDecoration: 'none'}} to='/games'>Games</Link>{menu==="games"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration: 'none'}} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("merch")}}><Link style={{textDecoration: 'none'}} to='/merch'>Merch</Link>{menu==="merch"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link> 
       <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
