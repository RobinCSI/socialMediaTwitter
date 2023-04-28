import React from "react";
import style from "./Sidebar.module.css";
import Icons from "../Icons";
import { IoLogoTwitter } from "react-icons/io";
import SingleMenu from "../SingleMenu";
import {ImHome} from "react-icons/im"
import {BsHash} from "react-icons/bs";
import {FiBell} from "react-icons/fi";
import {BsMessenger} from "react-icons/bs"
import {BsBookmark} from "react-icons/bs"
import {ImProfile} from "react-icons/im"
import {TfiMoreAlt } from "react-icons/tfi"
import { Button } from "@mui/material";
import { fontSize } from "@mui/system";
import {FaTwitterSquare} from "react-icons/fa"
function Sidebar() {
  return (
    <div>
      <div className={style.mainBox}>
        <Icons icons={<IoLogoTwitter  className={style.icons} />} />
        <SingleMenu icon={<ImHome className={style.iconss} />} nameMenu="Home" />
        <SingleMenu icon={<BsHash className={style.iconss} />} nameMenu="Explore" />
        <SingleMenu icon={<FiBell className={style.iconss} />} nameMenu="Notification" />
        <SingleMenu icon={<BsMessenger className={style.iconss} />} nameMenu="Messages" />
        <SingleMenu icon={<BsBookmark className={style.iconss} />} nameMenu="Bookmarks" />
        <SingleMenu icon={<FaTwitterSquare className={style.iconss} />} nameMenu="Twitter blue" />
        <SingleMenu icon={<ImProfile className={style.iconss} />} nameMenu="Profile" />
        <SingleMenu icon={<TfiMoreAlt className={style.iconss} />} nameMenu="More" />
        <Button sx={{borderRadius: 50, width: 150,backgroundColor: "rgb(29, 155, 240)",
        textTransform: "none" ,fontSize:15,fontWeight:"bold",marginLeft: 2
    
    }} variant="contained">Tweet</Button>
      </div>
    </div>
  );
}

export default Sidebar;
