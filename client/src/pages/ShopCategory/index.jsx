import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './ShopCategory.css';
import dropdown_icon from '../../components/assets/dropdown_icon.png';
import Item from '../../components/item/Item';
import { useLocation } from 'react-router-dom';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(12);
  const location = useLocation();
  const [sortOption, setSortOption] = useState('default');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortOption = (e, option) => {
    e.preventDefault();
    const scrollY = window.scrollY;

    setSortOption(option);
    setDropdownOpen(false);

    setTimeout(() => {
      window.scrollTo({ top: scrollY, behavior: 'auto' });
    }, 0);
  };

  const filteredProducts = all_product.filter(item => item.category === props.category);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'priceLowToHigh') return a.new_price - b.new_price;
    if (sortOption === 'priceHighToLow') return b.new_price - a.new_price;
    if (sortOption === 'az') return a.name.localeCompare(b.name);
    if (sortOption === 'za') return b.name.localeCompare(a.name);
    return 0;
  });
  const visibleProducts = sortedProducts.slice(0, visibleCount);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{visibleProducts.length}</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort" ref={dropdownRef} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDropdownOpen(prev => !prev);
        }}>
          Sort by <img src={dropdown_icon} alt="" />
          {dropdownOpen && (
            <div className="shopcategory-sort-dropdown">
              <p onClick={(e) => handleSortOption(e, 'priceLowToHigh')}>Price: Low to High</p>
              <p onClick={(e) => handleSortOption(e, 'priceHighToLow')}>Price: High to Low</p>
              <p onClick={(e) => handleSortOption(e, 'az')}>Name: A-Z</p>
              <p onClick={(e) => handleSortOption(e, 'za')}>Name: Z-A</p>
            </div>
          )}
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
