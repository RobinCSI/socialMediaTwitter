import React, {useState} from 'react'
import { addTweet } from '../redux/tweetsSlice'
import { useDispatch} from 'react-redux'
import {v4 as uuid} from 'uuid'

import style from './AddingTweet.module.css'

import { CgProfile } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import TextField from "@mui/material/TextField";

export default function TwitterFeed(){
    const [tweet, setTweet]=useState('')
    const [name, setName] = useState("");

    const dispatch=useDispatch()

    function handleNewTweet(e){
        setTweet(e.target.value)

    }

    function handleAddTweet(e){
        e.preventDefault();

        // console.log("Adding")
        if (name && tweet){
        let newTweet={id:uuid(), content: tweet, createdAt: new Date().toJSON(), image: "https://picsum.photos/1000/500?q=0", tweetedBy: {id: uuid(), name: name}, likeCount:0, commentCount:0, reTweetsCount:0, isLiked:false  }
        dispatch(addTweet(newTweet))
        setTweet('')
        setName('')
        }
        else alert("Kindly fill all the details")

    }

 

  return (
    <div className={style.container}>
      <h1>
        <form onSubmit={handleAddTweet}>
          <div>
            <CgProfile />
          </div>
          <div className={style.textField}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              id="standard-basic"
              placeholder="Name"
              variant="standard"
            />
          </div>
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
  );
}

