import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/product' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Checkout/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
