import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ShopCategory from "./ShopCategory";
import LoginSignup from "./LoginSignup";
import Product from "./Product"
import Cart from "./Cart";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import games_banner from "../components/assets/games_banner.jpg"
import accessories_banner from "../components/assets/accessories_banner.jpg"
import retro_banner from "../components/assets/retro_banner.jpg"



export default function AppRoutes() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<ShopCategory banner={games_banner} category="games" />} />
          <Route path="/accessories" element={<ShopCategory banner={accessories_banner} category="accessories" />} />
          <Route path="/retro" element={<ShopCategory banner={retro_banner} category="retro" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />

        </Routes>
        <Footer/>

      </BrowserRouter>

    </>
  )
}
