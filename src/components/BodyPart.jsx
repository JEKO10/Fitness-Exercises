import React from "react";
import Icon from "../assets/icons/gym.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <div
      className="bodyPart"
      type="button"
      style={bodyPart === item ? { borderTop: "4px solid #FF2625" } : {}}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={Icon} alt="IMG" />
      <h2>{item}</h2>
    </div>
  );
}

export default BodyPart;
