import React, {useState} from 'react'
import { addTweet } from '../../redux/tweetsSlice'
import {useSelector, useDispatch} from 'react-redux'
import Tweet from './../tweet/Tweet'
import {v4 as uuid} from 'uuid'

export default function TwitterFeed(){
    const [tweet, setTweet]=useState('')
    const allTweets=useSelector(state=>state.tweets.value)
    // console.log(allTweets)
    const dispatch=useDispatch()

    function handleNewTweet(e){
        setTweet(e.target.value)

    }

    function handleAddTweet(){
        // console.log("Adding")
        let newTweet={id:uuid(), content: tweet, createdAt: new Date().toJSON(), image: "https://picsum.photos/1000/500?q=0", tweetedBy: {id: uuid(), name: "Robin"}, likeCount:0, commentCount:0, reTweetsCount:0, isLiked:false  }
        dispatch(addTweet(newTweet))
        setTweet('')

    }

  return (
    <div>
        <label>Enter tweet here: <input value={tweet} type="text" onChange={handleNewTweet} /></label>
        <button onClick={handleAddTweet}>Tweet</button>
        <hr/>
        <ul>{allTweets.map((element, index)=><li key={element.id}><Tweet data={element} index={index} dispatch={dispatch}/></li>)}</ul>
        
    </div>
  )
}

