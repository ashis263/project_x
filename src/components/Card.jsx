import React from "react";
import "./card.css";
import Icon from "../components/Icon";

export default function card(props) {
  return (
    <div
      style={{
        backgroundImage: `url('../assets/${props.image}')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="vector1">
        <Icon className="icon" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="vector2"></div>
    </div>
  );
}
