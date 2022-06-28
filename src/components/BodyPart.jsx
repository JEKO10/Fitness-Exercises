import React from "react";
import Icon from "../assets/icons/gym.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <div className="bodyPart" type="button">
      <img src={Icon} alt="IMG" />
    </div>
  );
}

export default BodyPart;
