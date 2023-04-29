import React, { useEffect, useState } from "react";
import "./User.css";
import { Button, Box } from "@mui/material";
import SingleUser from "./SingleUser";
function UserData() {
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Box
        sx={{
          
          backgroundColor: "rgb(247, 249, 249)",

          borderRadius: 5,
          transform: "translate(240%, 120%)",
          border: "1px solid red",
        }}
      >
        <h3 className="h3">Who To Follow</h3>
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
          onClick={() => setDisplayCount(userData.length)}
          variant="outlined"
        >
          Show More
        </Button>
      </Box>
    </div>
  );
}

export default UserData;
