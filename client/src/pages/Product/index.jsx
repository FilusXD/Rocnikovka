import React, {useContext} from 'react'
import Breadcrum from '../../components/breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  if (!product) {
    return <div>Loading...</div>;
  }else{
    return (
      <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts currentProductId={product.id} category={product.category}/>
      </div>
     
    )
  }
 
}

export default Product
