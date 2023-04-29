import React from "react";
import style from "./Trending.module.css";
function TrendingSingle(props) {
  return (
    <div className={style.trend}>
      <p>{props.trend}</p>
      <h3 className={style.h33}>{props.desg}<span className={style.dot}>....</span></h3>
      <p>{props.tweets}</p>
    </div>
  );
}

export default TrendingSingle;
