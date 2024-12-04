import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductById, deleteProduct } from "../../models/Product";
import { useState, useEffect } from "react";

export default function ProductView() {
   const { id } = useParams();
   const [product, setProduct] = useState();
   const [isLoaded, setLoaded] = useState(false);
   const [info, setInfo] = useState();
   const [formData, setFormData] = useState();
   const navigate = useNavigate();

   const load = async () => {
    const data = await getProductById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200){
        setProduct(data.payload);
        setLoaded(true);
    }
   }

   const handleChange = (e) => {
    setFormData(e.target.value);
   }

   const handleDelete = async (e) => {
    e.preventDefault();
    if (product.name === formData){
        const data = await deleteProduct(id);
        if (data.status === 200){
            navigate("/")
        }else{
            setInfo(data.message);
        }
    }else{
        setInfo("Spatny vstup")
    }
   }

   useEffect(() => {
    load();

   }, []);

   if (isLoaded === null){
    return (
        <>
        <p>Product not found</p>
        </>
    )
   }

   if (!isLoaded){
    return (
        <>
        <p>Loading...</p>
        </>
    )
   }


  return (
    <>
    <h1>Product View</h1>
    <p>{id}</p>
    <p>Název produktu: {product.name}</p>
    <p>platforma: {product.platform}</p>
    <p>vydavatel: {product.developer}</p>
    <p>cena: {product.price}</p>
    <form>
        <input type="text" placeholder={product.name} onChange={handleChange} />
        <button onClick={handleDelete}>smazat</button>
    </form>
    <p>{info}</p>
    <Link to={`/update-product/${id}`}>
    <p>Aktualizovat product</p>
    </Link>
    <Link to={"/"}>
    <p>Go home</p>
    </Link>
    </>
  )
}
