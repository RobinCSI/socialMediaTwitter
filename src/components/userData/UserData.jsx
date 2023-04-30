import React, { useEffect, useState } from "react";
import "./User.css";
import { Button,Box } from "@mui/material";
import SingleUser from "./SingleUser";
function UserData() {
  let [userData, setUserData] = useState([]);
  const getData = () => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((twwets) => {
        console.log(twwets);
        setUserData(twwets);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* {userData.map((currentEle, index) => {
        return (
          <> */}
      <Box
        sx={{
          width: 300,
          height: 600,
          backgroundColor: "lightgray",
          // "&:hover": {
          //   backgroundColor: "initial",
          //   opacity: [0.9, 0.8, 0.7],
          // },
          borderRadius: 5,
          transform: "translate(300%, 50%)",
          border: "1px solid red",
        }}
      >
        {userData.map((currentEle, index) => {
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
      </Box>

      {/* <div className="avtar">
              <img
                src={currentEle.avatar_url}
                alt={currentEle.first_name}
                style={{ width: "90px", height: "90px" }}
              />
              <div key={currentEle.user_id}>{currentEle.first_name}</div>
              <Button sx={{
                height: 30
              }} variant="outlined">Follow</Button>
            </div> */}
    </div>
  );
}

export default UserData;
