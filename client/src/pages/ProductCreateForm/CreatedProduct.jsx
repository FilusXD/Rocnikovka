import { Link, useParams } from "react-router-dom"

export default function CreatedProduct(){
    const { id } = useParams();

    return(
        <>
        <h1>New product created: {id}</h1>
        <Link to= {`/product/${id}`}>
        <p>View product</p>
        </Link>
        <Link to = {"/"}>
        <p>Go back</p>
        </Link>
        </>
    )
}