import React from "react";
import "./User.css";
import { Button, Box } from "@mui/material";
function SingleUser(props) {
  return (
    <div className="avtar">
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "70px", height: "70px",borderRadius:"50px",backgroundColor:"transparent" }}
      />
      <div>{props.firstname}</div>
      <Button
        sx={{
          height: 30,
          margin: 3,
          backgroundColor: "white",
          color: "black",
          textTransform: "none",
          borderRadius: 50,
         border: "1px solid black",
        }}
        variant="outlined"
      >
        {props.msg}
      </Button>
    </div>
  );
}

export default SingleUser;
