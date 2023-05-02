import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Tweet from './../tweet/Tweet'

import { addTweet } from "./../../redux/tweetsSlice";

export default function TwitterFeed(){
    const allTweets=useSelector(state=>state.tweets.value)
    // console.log(allTweets)
    const dispatch=useDispatch()

    // useEffect(()=>{
    //   const localTweets=JSON.parse(localStorage.getItem("newTweets")) || []
    //   console.log(localTweets)
    //   dispatch(addTweet(...localTweets))
    //   },[])

   

  return (
    <div>
        <ul style={{listStyleType: 'none'}}>{allTweets.map((element, index)=><li key={element.id}><Tweet data={element} index={index} dispatch={dispatch}/></li>)}</ul>
    </div>
  )
}

