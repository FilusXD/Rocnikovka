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
import Footer from "../components/footer/Footer";
import men_banner from "../components/assets/banner_mens.png"
import women_banner from "../components/assets/banner_women.png"
import kid_banner from "../components/assets/banner_kids.png"


export default function AppRoutes() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/accessories" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/merch" element={<ShopCategory banner={kid_banner} category="kid" />} />
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
        <Footer/>

      </BrowserRouter>

    </>
  )
}
