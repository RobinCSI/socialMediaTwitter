import React, {useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../../components/smallComponents/Button";
import Sidebar from "../../components/sideBar/Sidebar";
import UserData from "../../components/userData/UserData";
import style from "./Home.module.css";
import TrendingData from "../../components/trending/TrendingData";
import AddingTweet from "./../../components/addingTweet/AddingTweet"
import TwitterFeed from "./../../components/homeTweetCarousel/twitterFeed/TwitterFeed"


import { useDispatch} from 'react-redux'
import { addTweet } from "./../../components/redux/tweetsSlice";


import Search from "../../components/search/Search";
 import HomeNav from "./../homeNavbar/HomeNav"

function Home() {

  const dispatch=useDispatch()

  useEffect(()=>{
    const localData=JSON.parse(localStorage.getItem("newTweets"))
    if(localData){
      const localTweets=localData
    // console.log(localTweets)
    const len=localTweets.length
    for(let i=len-1;i>=0;i--){
    dispatch(addTweet(localTweets[i]))
    }
    }},[])


  return (
    <div className={style.home}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.mainSection}>
        <div>
           <HomeNav/>
        </div>
        <div>
          
          <AddingTweet />
        </div>
        <div>
          <TwitterFeed />
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.search}>
          <Search/>
        </div>
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
