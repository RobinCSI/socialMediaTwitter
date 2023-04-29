import React, { useState } from "react";
import { Box } from "@mui/material";
import TrendingSingle from "./TrendingSingle";
import style from "./Trending.module.css";
function TrendingData() {
  const userData = [
    { id: 1, name: "Trending", designation: "Brahmin", count: "12k tweets" },
    {
      id: 2,
      name: "Trending",
      designation: "#FullStackDeveloper",
      count: "12k tweets",
    },
    {
      id: 3,
      name: "Politice.Trending",
      designation: "#FrontendDeveloper",
      count: "12k tweets",
    },
    {
      id: 4,
      name: "Buisness Trending",
      designation: "#FrontendDeveloper",
      count: "12k tweets",
    },
  ];
  let [tweetData, setTweetData] = useState(userData);
  return (
    <div className={style.main}>
      <Box
        sx={{
          width: 300,
         
          backgroundColor: "lightgray",

          borderRadius: 5,
          transform: "translate(300%, 20%)",
         
        }}
      >
        <h2 className={style.heading}>What's happening</h2>
        <div className={style.imageDiv}>
          <p className={style.p}>worriors at king</p>
          <img
            className={style.image}
            src="https://paige-photography.com/wp-content/uploads/2020/05/HY7A2666-1024x819.jpg"
            width="60px"
            height="60px"
          />
        </div>
        {tweetData.map((curentData, index) => {
          return (
            <>
              <TrendingSingle
                key={curentData.id}
                trend={curentData.name}
                desg={curentData.designation}
                tweets={curentData.count}
              />
            </>
          );
        })}
      </Box>
    </div>
  );
}

export default TrendingData;
