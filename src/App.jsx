
import { useState } from "react";


import './App.css'
import SignUp from './components/SignUp'







import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpInitial from "./pages/signup/SignUpInitial";

import NavBar from "./pages/navbar/Navbar";





import Logins from "./pages/Login/login";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/signup" element={<SignUpInitial />} />
      </Routes>
    </>
  );
}

export default App;
