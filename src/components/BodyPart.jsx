import React from "react";
import Icon from "../assets/icons/gym.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <section className="bodyPart">
      <img src={Icon} alt="IMG" />
    </section>
  );
}

export default BodyPart;
