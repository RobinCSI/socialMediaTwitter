import React from "react";
import style from "./Trending.module.css";
function TrendingSingle(props) {
  // console.log(props.data)
  

  return (
    <div className={style.trend}>
      <p style={{color:"#536471"}}>{props.trend}</p>
      <h3 className={style.h33}>{props.desg}<span style={{cursor:"pointer"}} onClick={()=>props.deleteTrend(props.id)} className={style.dot}>...</span></h3>
      <p style={{color:"#536471"}}>{props.tweets}</p>
    </div>
  );
}

export default TrendingSingle;
