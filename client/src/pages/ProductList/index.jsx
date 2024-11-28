import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllProducts } from "../../models/Product"
import ProductLink from "./ProductLink"

export default function ProductList() {
    const [products, setProducts] = useState();
    const [isLoaded, setLoaded] = useState(false);
    
    const load = async () =>{
        const data = await getAllProducts();
        if (data.status === 404 || data.status === 500) return setLoaded(null);
        if (data.status === 200){
            setProducts(data.payload);
            setLoaded(true);
        }
    };

    useEffect(() => {
        load();
    }, []);


  if (isLoaded === null){
    return(
        <>
        <p>Products not found</p>
        </>
    )
  }

  if (!isLoaded){
    return(
        <>
        <p>Loading...</p>
        </>
    )
  }

  return(
    <>
    <h1>Product list</h1>
    {
        products.map((product, index) => (
            <ProductLink key={index} {...product}/>
        ))
    }
    <Link to={"/"}>
    <p>Go back</p>
    </Link>
    </>
)
}
