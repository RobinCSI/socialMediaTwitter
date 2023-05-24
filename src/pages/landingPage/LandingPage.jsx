import React from 'react'
import Navbar from '../navbar/Navbar';
import LandingSidebar from '../../components/landingPage/LandingSidebar';
import TwitterFeed from '../../components/homeTweetCarousel/twitterFeed/TwitterFeed';
import RightsideCard from '../../components/landingPage/RightsideCard';
import style from "./LandingPage.module.css";

import { Icon } from "@mui/material";
import Icons from "../../components/smallComponents/Icons";
import { FiSettings } from "react-icons/fi";

function LandingPa() {
  return (
    <div>
         <div className={style.home}>

        <div className={style.sidebar}>
          <LandingSidebar />
        </div>
        <div className={style.mainSection}>
          
<div className={style.nav}>
        <h2 className={style.h222}>Explore</h2>
        <span className={style.ico}>
          <Icons icons={<FiSettings className={style.icons} />} />
        </span>
      </div>
          <div>
            <TwitterFeed />
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.trendings}>
            <RightsideCard />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default LandingPa
