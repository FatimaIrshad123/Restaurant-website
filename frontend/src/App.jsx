import React,{useState} from "react";

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
import { RecoilRoot } from "recoil";
import Admin from "./components/Admin";
import AdminPage  from "./components/AdminPage";
import SecretKey from "./components/SecretKey";

const App = () => {
  const [cart,setCart] = useState(0)
  return (

    <div>
  <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/addmenu" element={<AddMenu/>}/>
          <Route path="/secretkey" element={<SecretKey />}/>
          <Route path="/menu" element={
          <RecoilRoot>
            <Menu />
            </RecoilRoot>}
          />
          <Route path= '/cart' element={
          <RecoilRoot><Cart id = {'66261ca2df6655a3ae4f6a82'}/>
          </RecoilRoot>}/>
         
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
};

export default App;
