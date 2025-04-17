import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import Item from '../item/Item'

const RelatedProducts = ({ currentProductId, category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.payload.filter(
          (item) => item.category === category && item.id !== currentProductId
        )
        .slice(0, 4);
        setRelatedProducts(filtered);
      });
  }, [currentProductId, category]);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
