import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductCreateForm from "./ProductCreateForm";
import CreatedProduct from "./ProductCreateForm/CreatedProduct";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import ProductUpdateForm from "./ProductUpdateForm";
import ShopCategory from "./ShopCategory";
import LoginSignup from "./LoginSignup";
import Product from "./Product"
import Cart from "./Cart";
import Navbar from "../components/navbar/Navbar";


export default function AppRoutes() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<ShopCategory category="game" />} />
          <Route path="/accessories" element={<ShopCategory category="accessory" />} />
          <Route path="/merch" element={<ShopCategory category="merch" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />

          <Route path="/add-product" element={<ProductCreateForm />} />
          <Route path="/created-product/:id" element={<CreatedProduct />} />
          <Route path="/view-products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/update-product/:id" element={<ProductUpdateForm />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}
