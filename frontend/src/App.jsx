import React from "react";
import Navbar from "./components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (

    <div>
  <BrowserRouter>
  {/*<Navbar />*/}
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
};

export default App;
