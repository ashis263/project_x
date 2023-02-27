import React from "react";
import "./card.css";
import Icon from "../components/Icon";

export default function card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url('../assets/${props.image}')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container"
        style={{
          backgroundImage: `url('../assets/container.png')`,
        }}
      >
        <div className="items">
          <Icon />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}
