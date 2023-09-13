import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
