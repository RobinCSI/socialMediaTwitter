import { useState } from "react";

import "./App.css";
import SignUp from "./components/SignUp";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpInitial from "./pages/signup/SignUpInitial";

import NavBar from "./pages/navbar/Navbar";

import Login from "./pages/Login/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <NavBar />
      </div>
    </>
  );
}

export default App;
