import React from "react";
import Buttons from "./Button";
import Icons from "./Icons";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import style from "./Uipart.module.css";

function UiPart(props) {
  return (
    <div>
      <Icons icons={<IoLogoTwitter className={style.icon} />} />
      <h3 className={style.text}>{props.title}</h3>
      <Buttons texts="Sign up with Google" icon={<FcGoogle />} />
      <Buttons texts="Sign up with Apple" icon={<FaApple />} />
    </div>
  );
}

export default UiPart;
