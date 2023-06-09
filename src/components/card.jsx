import React from "react";
import Photo from "./photo";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Photo src={props.imgURL} />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
