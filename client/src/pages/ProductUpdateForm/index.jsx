import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { updateProduct, getProductById } from "../../models/Product"

export default function ProductUpdateForm() {
    const { id } = useParams();
    const [ product, setProduct ] = useState();
    const [ isLoaded, setLoaded ] = useState(false);
    const [ info, setInfo ] = useState();
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

    const updateForm = async () =>{
        const data = await updateProduct(id, formData);
        if (data.status === 200) return navigate(`/product/${id}`);
        setInfo(data.message);
    }
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
      }
    
    const handleUpdate = (e) =>{
        e.preventDefault();
        updateForm();
      }

      useEffect(() => {
        load();
      }, []);

      if(isLoaded === null){
        return(
            <>
            <p>Product not found</p>
            </>
        )
      }
      if(!isLoaded){
        return(
            <>
            <p>Loading...</p>
            </>
        )
      }



  return (
    <>
    <h1>Product update form</h1>
    <p>{id}</p>
    <form>
      <input type="text" name="name" required placeholder="Enter name" onChange={handleChange} defaultValue={product.name}/>
      <input type="text" name="platform" required placeholder="Enter platform" onChange={handleChange} defaultValue={product.platform} />
      <input type="text" name="developer" required placeholder="Enter developer" onChange={handleChange} defaultValue={product.developer}/>
      <input type="number" name="price" required placeholder="Enter price" onChange={handleChange} defaultValue={product.price}/>
      <button onClick={handleUpdate}>
        Update product
      </button>
    </form>
    </>
  )
}
