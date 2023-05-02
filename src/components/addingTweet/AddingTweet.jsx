
import React, { useState, useEffect } from "react";

import { addTweet } from "../redux/tweetsSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import style from "./AddingTweet.module.css";

import { CgProfile } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


import { Icon } from "@mui/material";
import Icons from "../smallComponents/Icons";
import { FiSettings } from "react-icons/fi";



export default function AddingTweet() {
  const [tweet, setTweet] = useState("");


  const dataFromLocal = JSON.parse(localStorage.getItem("auth"));
  console.log(dataFromLocal)

  const dispatch = useDispatch();

  function handleNewTweet(e) {
    setTweet(e.target.value);
  }

  function handleAddTweet(e) {
    e.preventDefault();


   
    if (tweet) {

      let newTweet = {
        id: uuid(),
        content: tweet,
        createdAt: new Date().toJSON(),
        image: "https://picsum.photos/1000/500?q=0",

        tweetedBy: { id: uuid(), name: dataFromLocal.user.name },

        likeCount: 0,
        commentCount: 0,
        reTweetsCount: 0,
        isLiked: false,
      };
      dispatch(addTweet(newTweet));
      setTweet("");
      setName("");
    } else alert("Kindly fill all the details");
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("transparent", window.scrollY > 0);
  }

  return (
    <>
      <div className={style.nav}>
        <h2 className={style.h222}>Explore</h2>
        <span className={style.ico}>
          <Icons icons={<FiSettings className={style.icons} />} />
        </span>
      </div>



  return (
    <>

      <div className={style.container}>
        <h1>
          <form onSubmit={handleAddTweet}>

            <span>
              {/* <CgProfile /> */}
              <img 
              className={style.ProfileImage}
               src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </span>
           
              <p
               className={style.userName}
              >{dataFromLocal.user.name}</p>
             
   
            <div className={style.textarea}>
              <textarea
                onChange={handleNewTweet}
                name="tweet"
                value={tweet}
                placeholder="What's happening?"
                className={style.textArea}
              />
            </div>
            <div className={style.lowerPart}>
              <div className={style.emogeStyle}>
                <CiImageOn className={style.emogies} />
                <AiOutlineFileGif className={style.emogies} />
                <BiPoll className={style.emogies} />
                <BsEmojiSmile className={style.emogies} />
                <CiLocationOn className={style.emogies} />
              </div>
              <div className={style.button}>
                <button type="submit" className={style.btn}>
                  Tweet
                </button>
              </div>
            </div>
          </form>
        </h1>
      </div>
    </>
  );
}
