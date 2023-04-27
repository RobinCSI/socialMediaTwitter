import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Login.css";
import Buttons from "../components/Button";
import { Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Icons from "../components/Icons";
import UiPart from "../components/UiPart";

function Login() {
  return (
    <div>
      <Box
        sx={{
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 600,
          height: 600,
          backgroundColor: "white",
          borderRadius: "10px",
          border: "1px solid green",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
      
        <Icons  icons={<ImCross className="cross"/>}/>
       
        {/* <Icons  icons={<IoLogoTwitter className="icon"/>}/>
        <h3 className="text">Join Twitter today</h3>
        <Buttons texts="Sign up with Google" icon={<FcGoogle />} />
        <Buttons texts="Sign up with Apple" icon={<FaApple />} /> */}

        <UiPart/>
        <div className="hrr">or</div>
        <Button
          sx={{
            width: 300,
            height: 40,
            border: "1px solid #dadce0",
            backgroundColor: "black",
            borderRadius: "50px",
            color: "white",
            fontFamily: "Google Sans arial,sans-serif",
            fontSize: 14,
            letterSpacing: 0.25,
            margin: 2,

            "&:hover": {
              backgroundColor: "initial",
              color: "initial",
            },
          }}
          variant="outlined"
        >
          Create account
        </Button>
        <div>
          <p>
            By signing up, you agree to the<span>Terms of Service</span>
          </p>
          <p>
            {" "}
            and <span>Privacy Policy</span> , including <span>Cookie Use.</span>{" "}
          </p>
        </div>

        <p className="p">
          Have an account already?{" "}
          <span>
            <NavLink className="link" to="/register">
              Log in
            </NavLink>
          </span>
        </p>
      </Box>
    </div>
  );
}

export default Login;
