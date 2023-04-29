import React from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../components/Button";
import Sidebar from "../components/sideBar/Sidebar";
import UserData from "../components/userData/UserData";
import "./Home.css";
import TrendingData from "../components/trending/TrendingData";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <TrendingData />
      <UserData />
    </div>
  );
}

export default Home;
