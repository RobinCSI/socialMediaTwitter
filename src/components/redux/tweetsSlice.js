import { createSlice } from "@reduxjs/toolkit";
import {useState, useEffect} from 'react'

// const initialTweets=fetch('./../../public/tweets.json').then(response=>console.log(response))
// function fetchingData(){
// const [initialTweets, setInitialTweets]=useState()
// useEffect(()=>{fetchingTweets();}, [])
// const fetchingTweets = ()=>{
//     fetch("/tweets.json")
//   .then((response) => response.json()).then(tweets=>setInitialTweets(tweets))
// }

// console.log(initialTweets)
//   return(initialTweets)
// }

const initialState = {
  value: await fetch("/tweets.json").then((response) => response.json())
};


export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.unshift(action.payload);
    },
    updateImpression: (state, action)=>{
      const {index, impression, isRetweeted}=action.payload
      let updatedTweet={}
      // console.log(typeof(impression))
      // console.log(impression==="reTweet")


      switch(impression){
        case "reTweet" : {
          // console.log(impression)
          const {reTweetsCount}=state.value[index]
          console.log(isRetweeted)
          updatedTweet={...state.value[index], reTweetsCount:isRetweeted? reTweetsCount-1: reTweetsCount+1}
          break;
          // console.log(isLiked)
          // console.log(impression)
        }
        case "like" : {
          // console.log(impression)
          
          const {likeCount, isLiked}=state.value[index]
          updatedTweet={...state.value[index], likeCount:isLiked? likeCount-1: likeCount+1}
          // console.log(isLiked)
          updatedTweet={...updatedTweet, isLiked:!isLiked}
          break;
        }
      }
      // console.log(index)
      state.value.splice(index, 1, updatedTweet)
    }
  },
});

export const { addTweet, updateImpression } = tweetsSlice.actions;
export default tweetsSlice.reducer;
