import React, { useState } from "react";
import { Box } from "@mui/material";
import TrendingSingle from "./TrendingSingle";
import style from "./Trending.module.css";
function TrendingData() {
  const userData = [
    {
      id: 1,
      name: "Social Trending",
      designation: "India@75",
      count: "58K tweets",
    },
    {
      id: 2,
      name: "Jobs Trending",
      designation: "#FullStackDeveloper",
      count: "12K tweets",
    },
    {
      id: 3,
      name: "Politics Trending",
      designation: "#FrontendDeveloper",
      count: "7.3K tweets",
    },
    {
      id: 4,
      name: "Business Trending",
      designation: "#Business",
      count: "1,765 tweets",
    },
  ];
  const [tweetData, setTweetData] = useState(userData);

  function handleNotInterested(id) {
    const newTrendData=tweetData.filter(element=>element.id!==id);
    setTweetData(newTrendData);
  }


//Not working using splice
  // function handleNotInterested(index) {}
  //   tweetData.splice(index, 1);
  //   console.log(tweetData)
  //   setTweetData(tweetData);
  // }

  return (
    <div className={style.main}>
      <Box
        sx={{
          width: 300,

          backgroundColor: "rgb(247, 249, 249)",
          border: "2px solid lightgrey",

          borderRadius: 5,
          // transform: "translate(300%, 20%)",
        }}
      >
        <h2 className={style.heading}>What's happening</h2>
        <div className={style.imageDiv}>
          <p className={style.p}>Heat at Knicks</p>
          <img
            className={style.image}
            src="https://paige-photography.com/wp-content/uploads/2020/05/HY7A2666-1024x819.jpg"
            width="60px"
            height="60px"
          />
        </div>
        <ul>
          {tweetData.map((currentData, index) => (
            <li key={currentData.id}>
              <TrendingSingle
                id={currentData.id}
                trend={currentData.name}
                desg={currentData.designation}
                tweets={currentData.count}
                deleteTrend={handleNotInterested}
                data={tweetData}
                index={index}
              />
            </li>
          ))}
        </ul>
   </Box>
    </div>
  );
}

export default TrendingData;
