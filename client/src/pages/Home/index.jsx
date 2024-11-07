import { Link } from "react-router-dom"


export default function Home() {
  return (
    <>
    <Link to={"/add-product"}>
    <p>Add product</p>
    </Link>
    <Link to={"/view-products"}>
    <p>View products</p>
    </Link>
    </>
  )
}
