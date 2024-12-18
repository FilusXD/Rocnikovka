import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import ProductCreateForm from "./ProductCreateForm";
import CreatedProduct from "./ProductCreateForm/CreatedProduct";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import ProductUpdateForm from "./ProductUpdateForm";

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/add-product" element={<ProductCreateForm/>}/>
        <Route path="/created-product/:id" element={<CreatedProduct/>}/>
        <Route path="/view-products" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductView/>}/>
        <Route path="/update-product/:id" element={<ProductUpdateForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
