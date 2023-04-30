
import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUpInitial from "./pages/SignUpInitial";
import Register from "./pages/Register";
import NavBar from "./pages/Navbar";
import Layout from "./components/layout/Layout";
// import Logins from "./pages/login/Login";
import UserData from "./components/userData/UserData";
import TwitterFeed from "./components/homeTweetCarousel/twitterFeed/TwitterFeed";


function App() {
  return (
    <>
      <div>
        {/* <NavBar /> */}
        <Layout><TwitterFeed /></Layout>
      </div>
      {/* <Routes> */}

        {/* <Route path="/" element={<Layout><Home/></Layout>} /> */}
        {/* <Route path="/login" element={<Layout><Logins /></Layout>} /> */}
        {/* <Route path="/signup" element={<Layout><SignUpInitial /></Layout>} /> */}

        {/* <Route path="/home" element={<Layout />} /> */}
      {/* </Routes> */}

    

    </>
  );
}

export default App;
