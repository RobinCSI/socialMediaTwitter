import React, { useState } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Signup.css";
import Buttons from "../components/Button";
import { Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Icons from "../components/Icons";
import UiPart from "../components/UiPart";
import NormalButton from "../components/NormalButton";

function SignUpInitial() {
  const [showForm,setShowForm]=useState(true);
  function handleForm(){
    setShowForm(false);
   }
  return (
    <div>
      {showForm &&
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
        <button onClick={handleForm}><Icons icons={<ImCross className="cross" />} /></button>

        <UiPart title="Join Twitter today" />
        <div className="hrr">or</div>
       
        <NormalButton name="create account" />
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
            <NavLink className="link" to="/login">
              Log in
            </NavLink>
          </span>
        </p>
      </Box>}
    </div>
  );
}

export default SignUpInitial;
