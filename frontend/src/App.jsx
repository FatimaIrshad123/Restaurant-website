import React,{useState} from "react";
import Navbar from "./components/Navbar";

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import AddMenu from "./components/AddMenu";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const App = () => {
  const [cart,setCart] = useState(0)
  return (

    <div>
  <BrowserRouter>
        <Navbar size={cart}/>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/addmenu" element={<AddMenu/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path= '/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
};

export default App;
