import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import ProductCreateForm from "./ProductCreateForm";

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/add-product" element={<ProductCreateForm/>}/>
        <Route />
    </Routes>
    </BrowserRouter>
    </>
  )
}
