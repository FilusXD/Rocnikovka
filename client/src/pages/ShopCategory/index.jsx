import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './ShopCategory.css';
import dropdown_icon from '../../components/assets/dropdown_icon.png';
import Item from '../../components/item/Item';
import { useLocation } from 'react-router-dom';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(12);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromProductPage) {
      return; 
    }
    setVisibleCount(12); 
  }, [props.category, location.key]); 

  const handleExploreMore = (e) => {
    e.preventDefault(); 
    const currentScroll = window.scrollY;
    setVisibleCount(prev => prev + 12);
    setTimeout(() => {
      window.scrollTo({ top: currentScroll, behavior: 'auto' });
    }, 0);
   
  };

  const filteredProducts = all_product.filter(item => item.category === props.category);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{visibleProducts.length}</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {visibleProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <button
        type="button"
        className="shopcategory-loadmore" onClick={handleExploreMore}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
