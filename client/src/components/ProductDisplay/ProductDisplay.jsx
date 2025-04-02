import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import start_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.
        </div>
        <div className="productdisplay-right-platforms">
          <h1>Select Platform</h1>
          <div className="productdisplay-right-platform">
            <div>PS5</div>
            <div>PS4</div>
            <div>Xbox SX</div>
            <div>Xbox One</div>
            <div>Nintendo Switch</div>
          </div>
        </div>
        <button onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category : Singleplayer</span></p>
        <p className='productdisplay-right-category'><span>Genre : Open World, Action, RPG</span></p>
      </div>
    </div>
  )
}

export default ProductDisplay
