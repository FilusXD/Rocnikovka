import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import start_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
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
          {product.old_price && product.old_price !== "" && (
            <div className="productdisplay-right-price-old">${product.old_price}</div>
          )}
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus odit perferendis assumenda reiciendis magni, cupiditate, totam sequi voluptates maiores expedita! Laudantium minima pariatur excepturi tempore error odio quis! Impedit.
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
