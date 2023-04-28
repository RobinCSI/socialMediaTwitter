import React from "react";
import Icons from "./Icons";
import style from "./Single.module.css";
function SingleMenu(props) {
  return (
    <div>
      <div className={style.menu}>
        <Icons icons={props.icon} />
        <button className={style.btn}>{props.nameMenu}</button>
      </div>
    </div>
  );
}

export default SingleMenu;
