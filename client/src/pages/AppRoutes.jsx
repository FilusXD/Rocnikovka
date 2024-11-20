import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import ProductCreateForm from "./ProductCreateForm";
import CreatedProduct from "./ProductCreateForm/CreatedProduct";

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/add-product" element={<ProductCreateForm/>}/>
        <Route path="/created-product/:id" element={<CreatedProduct/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
