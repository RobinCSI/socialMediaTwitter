import React, {useEffect, useRef} from 'react'
import Box from '@mui/material/Box';
import { updateImpression } from '../../redux/tweetsSlice'


import styles from './Tweet.module.css'

import {FaRegComment, FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart, AiOutlineUpload} from 'react-icons/ai'
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {FcLike} from 'react-icons/fc'
import {BsDot} from 'react-icons/bs'

const Tweet = ({data, index, dispatch}) => {
  const isRetweetedRef=useRef(false)
  const {name}=data.tweetedBy

  function twitterHandle(){
    let nameArr=name.split(" "), handle="",i
    for(i=1;i<nameArr.length;i++){
      handle=handle+nameArr[i][0].toLowerCase()
    }
    handle="@"+handle+nameArr[0]
    return(handle)
    
  }

  function tweetTimeElapsed({createdAt}){
    const milliseconds=Date.parse(createdAt)
    const hours2=milliseconds/(60*1000*60)
const current= new Date()
let currentHours=current.getTime()/(1000*60*60)

if(Math.round(currentHours-hours2)<=24){
  if(Math.round(currentHours-hours2)==0)
  return("now") 
  else
return(Math.round(currentHours-hours2)+"h")
}
else {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  let tweetCreated=new Date(createdAt)
  let date=tweetCreated.getDate()
  let month=tweetCreated.getMonth()
  return(months[month]+" "+date)


    }
  }


    function handleImpressionClick(clicked){
      // console.log(clicked)
      if(clicked=="reTweet"){
        dispatch(updateImpression({index: index, isRetweeted: isRetweetedRef.current, impression: "reTweet"}))
        isRetweetedRef.current=!isRetweetedRef.current
        // console.log(isRetweetedRef.current)
      } else if(clicked=="like"){
        dispatch(updateImpression({index: index, impression: "like"}))
      }
      

    }

  return (
    <Box
      sx={{
        width: 600,
        height: 600,
        // padding:1,
        backgroundColor: 'white',
        border: "1px solid rgb(247, 249, 249)",
        '&:hover': {
          backgroundColor: 'rgb(247, 249, 249)',
        },
      }}
    >
      
      <div className={styles.tweetHeading}>
      <img src="https://xsgames.co/randomusers/avatar.php?g=male" className={styles.profilePic}/>
      <div className={styles.tweet}>
        <div className={styles.tweetText}>
      <h4 className={styles.headingText} style={{color: "black"}}>{data.tweetedBy.name}</h4>
      <p className={styles.headingText}>{twitterHandle()}</p>
      <BsDot/>
      <p className={styles.headingText}>{tweetTimeElapsed(data)}</p>
      </div>
      <p style={{color:"black", marginTop: "3px", marginBottom:"10px"}}>{data.content}</p>
      
      <img src={data.image} className={styles.tweetPic} />
      <div className={styles.impressionBar}>
      <div className={styles.icons} onClick={()=>handleImpressionClick("comment")}>
        <FaRegComment />
        <span className={styles.iconsCount}>{data.commentCount}</span>
        </div>
        <div className={styles.icons} onClick={()=>handleImpressionClick("reTweet")}>
        <FaRetweet />
        <span className={styles.iconsCount}>{data.reTweetsCount}</span>
        </div>
        <div className={styles.icons} onClick={()=>handleImpressionClick("like")}>
        <span style={{color:"gray"}}>{data.isLiked?<FcLike/>:<AiOutlineHeart />}</span>
        <span className={styles.iconsCount}>{data.likeCount}</span>
        </div>
        <div className={styles.icons}>
        <TbBrandGoogleAnalytics />
        <span className={styles.iconsCount}>{data.likeCount+data.commentCount+data.reTweetsCount}</span>
        </div>
        <div className={styles.icons}>
        <AiOutlineUpload />
        </div>
        
      </div>
      </div>
      </div>
      


    </Box>
  )
}

export default Tweet