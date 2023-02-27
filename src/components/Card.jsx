import React from "react";
import "./card.css";
import Icon from "../components/Icon";

export default function card(props) {

  return (
    <div style={{ backgroundImage:`url('../assets/${props.image}')` ,backgroundRepeat:"no-repeat"}}>
      <div className="vector1">
        
      </div>
    </div>
  );
}
