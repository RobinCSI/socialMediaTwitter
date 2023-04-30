import React from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../components/Button";
import Sidebar from "../components/sideBar/Sidebar";
import UserData from "../components/userData/UserData";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <Sidebar/>
      <UserData/>
      
    </div>
  );
}

export default Home;
