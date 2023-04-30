import React, { useEffect, useRef } from "react";

import "./App.css";
import SignUp from "./components/SignUp";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpInitial from "./pages/signup/SignUpInitial";



import Login from "./pages/Login/login";
import { useRecoilState } from "recoil";
import { authAtom } from "./recoil/users";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authAtom);

  const isFirstRender = useRef(true);
  useEffect(() => {
    const authFromLocal = JSON.parse(localStorage.getItem("auth"));
    if (authFromLocal && isFirstRender.current) {
      setAuth(authFromLocal);
    }
    localStorage.setItem("auth", JSON.stringify(auth));
    if (auth.isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
    isFirstRender.current = false;
  }, [auth]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      
    </>
  );
}

export default App;
