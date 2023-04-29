import React, { useState } from "react";
import { Box } from "@mui/material";
import TrendingSingle from "./TrendingSingle";
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
    <div>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "white",

          borderRadius: 5,
          transform: "translate(300%, 20%)",
          border: "1px solid red",
        }}
      >
        <h2>What's happening</h2>
        <div>
            <p>worriors at king</p>
            <img src="https://paige-photography.com/wp-content/uploads/2020/05/HY7A2666-1024x819.jpg" width="100px"/>
        </div>
        {tweetData.map((curentData, index) => {
          return (
            <>
              <TrendingSingle
                key={curentData.id}
                trend={curentData.name}
                designation={curentData.designation}
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
