import { Link } from "react-router-dom"
import Products from "../../components/Products"

export default function Home() {
  return (
    <>
    <Products></Products>
    
    <Link to={"/add-product"}>
    <p>Add product</p>
    </Link>
    <Link to={"/view-products"}>
    <p>View products</p>
    </Link>
    </>
  )
}
