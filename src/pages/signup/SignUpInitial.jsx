import React, { useState } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import style from "./Signup.module.css";

import { Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Icons from "../../components/smallComponents/Icons";
import UiPart from "../../components/smallComponents/UiPart";
import NormalButton from "../../components/smallComponents/NormalButton";
import Navbar from "../navbar/Navbar";

function SignUpInitial() {
  const [showForm, setShowForm] = useState(true);
  function handleForm() {
    setShowForm(false);
  }
  return (
    <div>
      {showForm && (
        <Box
          sx={{
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 500,
            maxHeight: 500,
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid lightgrey",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -5,
            padding: 15,
          }}
        >
          <button onClick={handleForm}>
            <Icons icons={<ImCross className={style.cross} />} />
          </button>

          <UiPart title="Join Twitter today" />
          <div className="hrr">or</div>

          <NormalButton name="create account" />
          <div>
            <p>
              By signing up, you agree to the<span>Terms of Service</span>
            </p>
            <p>
              {" "}
              and <span>Privacy Policy</span> , including{" "}
              <span>Cookie Use.</span>{" "}
            </p>
          </div>

          <p className={style.p}>
            Have an account already?{" "}
            <span>
              <NavLink className="link" to="/login">
                Log in
              </NavLink>
            </span>
          </p>
        </Box>
      )}
      <Navbar />
    </div>
  );
}

export default SignUpInitial;
