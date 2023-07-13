import React from "react";
import { Route, Routes } from "react-router-dom";
import Fotar from "./Comp/Footer/Fotar";
import Navba from "./Comp/Navbar/Navba";
import Home from "./Comp/Pages/Home";
import Login from "./Comp/Pages/Login";
import Product from "./Comp/Pages/Product";
import Signup from "./Comp/Pages/Signup";

const App = () =>{
  return(
    <>
    <Navba />
      <Routes>
        <Route index Component={Home} />
        <Route path="/product" Component={Product} />
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
      </Routes>
      <Fotar />
    </>
  );

}
export default App;