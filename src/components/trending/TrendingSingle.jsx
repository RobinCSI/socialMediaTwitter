import React from "react";

function TrendingSingle(props) {
  return (
    <div>
      <p>{props.trend}</p>
      <p>{props.desgnation}</p>
      <p>{props.tweets}</p>
    </div>
  );
}

export default TrendingSingle;
