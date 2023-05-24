import React from "react";
import Buttons from "../smallComponents/Button";
import Icons from "../smallComponents/Icons";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import style from "../smallComponents/Uipart.module.css";
import NormalButton from "../smallComponents/NormalButton";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function UiPartLanding(props) {
  return (
    <div className={style.landing}>
      <h2 className={style.h2Text}>New To Twitter?</h2>
      <h4 className={style.h4Text}>
        Sign up now to get your own personalized timeline!
      </h4>
      <Buttons texts="Sign up with Google" icon={<FcGoogle />} />
      <Buttons texts="Sign up with Apple" icon={<FaApple />} />
      <Link to="/register">
        {" "}
        <Button
          sx={{
            textTransform: "none",
            width: 300,
            height: 40,
            border: "1px solid #dadce0",
            backgroundColor: "white",
            borderRadius: "50px",
            color: "black",
            fontFamily: "Google Sans arial,sans-serif",
            fontSize: 14,
            letterSpacing: 0.25,
            marginLeft: 2,

            "&:hover": {
              backgroundColor: "initial",
              color: "initial",
              border: "1px solid #dadce0",
            },
          }}
          variant="outlined"
        >
          Create account
        </Button>
      </Link>
      <p className={style.pText}>
        By signing up, you agree to the <span>Terms of Service</span> and{" "}
        <span>Privacy Policy</span>, including <span>Cookie Use.</span>
      </p>
    </div>
  );
}

export default UiPartLanding;
