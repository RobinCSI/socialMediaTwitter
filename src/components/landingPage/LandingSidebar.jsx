import React from "react";
import style from "../sideBar/Sidebar.module.css";
import Icons from "../smallComponents/Icons";
import { IoLogoTwitter } from "react-icons/io";
import SingleMenu from "../singleMenu/SingleMenu";
import { ImHome } from "react-icons/im";
import { BsHash } from "react-icons/bs";
import { FiSettings} from "react-icons/fi"
function LandingSidebar() {
  return (
    <div className={style.mainBox}>
      <Icons icons={<IoLogoTwitter className={style.icons} />} />
      
      <SingleMenu
        icon={<BsHash className={style.iconss} />}
        nameMenu="Explore"
      />
      <SingleMenu icon={<FiSettings className={style.iconss} />} nameMenu="Setting" />
    </div>
  );
}

export default LandingSidebar;
