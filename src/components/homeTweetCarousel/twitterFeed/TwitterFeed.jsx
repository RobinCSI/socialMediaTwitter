import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Tweet from './../tweet/Tweet'

export default function TwitterFeed(){
    const allTweets=useSelector(state=>state.tweets.value)
    // console.log(allTweets)
    const dispatch=useDispatch()

   

  return (
    <div>
        <ul style={{listStyleType: 'none'}}>{allTweets.map((element, index)=><li key={element.id}><Tweet data={element} index={index} dispatch={dispatch}/></li>)}</ul>
    </div>
  )
}

