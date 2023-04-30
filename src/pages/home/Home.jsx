import React from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../../components/smallComponents/Button";
import Sidebar from "../../components/sideBar/Sidebar";
import UserData from "../../components/userData/UserData";
import style from "./Home.module.css";
import TrendingData from "../../components/trending/TrendingData";
function Home() {
  return (
    <div className={style.home}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.mainSection}></div>
      <div className={style.rightSide}>
        <div className={style.trending}>
          <TrendingData />
        </div>
        <div className={style.userdata}>
          <UserData />
        </div>
      </div>
    </div>
  );
}

export default Home;