import React from "react";
import {useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { Button } from "@mui/material";

function Navbar() {
  const navigate = useNavigate();
  function handleShowLogin() {
    
    navigate("/login");
  }

  function handleShowSignup() {
    navigate("/signup");
  }
  return (
    <div className={style.navbar}>
      <div className={style.textNavbar}>
        <div className={style.msg}>
          <h2>Don't miss what's happening</h2>
          People on Twitter are the first to know.
        </div>
      </div>

      <div className={style.yellow}>
        <Button
          sx={{
            borderRadius: 50,
            border: "1px solid white",
            color: "white",
            "&:hover": {
              backgroundColor: "transparent",
              color: "white",
            },
          }}
          className={style.navLink}
          onClick={handleShowLogin}
          variant="outlined"
        >
          Login
        </Button>
        <Button
          sx={{
            borderRadius: 50,
            "&:hover": {
              backgroundColor: "white",
              color: "initial",
            },
          }}
          className={style.navLink}
          onClick={handleShowSignup}
          variant="contained"
        >
          Signup
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
