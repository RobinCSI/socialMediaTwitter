import React, { useEffect, useState } from "react";
import style from "./User.module.css";
import { Button, Box } from "@mui/material";
import SingleUser from "./SingleUser";

function UserData() {
  let [msg, setMsg] = useState(true);
  let [userData, setUserData] = useState([]);
  let [displayCount, setDisplayCount] = useState(3);
  let userDetails = userData.slice(0, displayCount);
  const getData = () => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((twwets) => {
        console.log(twwets);
        setUserData(twwets);
      });
  };

  function handleData() {
    setDisplayCount(userData.length);
    setMsg(!msg);
  }

  function showInitialData() {
    setDisplayCount(3);
    setMsg(!msg);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          border: "2px solid lightgrey",
          width: 300,
          borderRadius: 5,
          // transform: "translate(200%, 180%)",
        }}
      >
        <h3 className={style.h3}>Who To Follow</h3>
        {userDetails.map((currentEle, index) => {
          return (
            <>
              <SingleUser
                key={currentEle.user_id}
                image={currentEle.avatar_url}
                firstname={currentEle.first_name}
                msg="Follow"
              />
            </>
          );
        })}
        {/* 
        <button onClick={msg ? handleData : showInitialData}>
          {msg ? "Show More" : "Show Less"}
        </button> */}
        <Button
          sx={{
            borderRadius: 50,
            border: "none",
            textTransform: "none",
            fontSize: 17,
            "&:hover": {
              backgroundColor: "transparent",
              border: "none",
            },
          }}
          onClick={msg ? handleData : showInitialData}
          variant="outlined"
        >
          {msg ? "Show More" : "Show Less"}
        </Button>
      </Box>
    </div>
  );
}

export default UserData;
