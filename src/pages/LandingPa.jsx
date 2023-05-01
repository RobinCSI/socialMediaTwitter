import React from 'react'
import Navbar from './navbar/Navbar';
import LandingSidebar from '../components/landingPage/LandingSidebar';
import TwitterFeed from '../components/homeTweetCarousel/twitterFeed/TwitterFeed';
import RightsideCard from '../components/landingPage/RightsideCard';
import style from "./home/Home.module.css"
function LandingPa() {
  return (
    <div>
         <div className={style.home}>
        <div className={style.sidebar}>
          <LandingSidebar />
        </div>
        <div className={style.mainSection}>
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
