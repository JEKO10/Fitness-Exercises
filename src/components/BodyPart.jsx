import React from "react";
import Icon from "../assets/icons/gym.png";
import Legs from "../assets/icons/legs.png";
import Cardio from "../assets/icons/cardio.png";
import Back from "../assets/icons/back.jpg";
import Chest from "../assets/icons/chest.png";
import Arms from "../assets/icons/arms.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  console.log(item);
  return (
    <div
      className="bodyPart"
      type="button"
      style={bodyPart === item ? { borderTop: "4px solid #FF2625" } : {}}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      {item === "all" ? (
        <img src={Icon} alt="IMG" />
      ) : item === "cardio" ? (
        <img src={Cardio} alt="IMG" />
      ) : item === "back" ? (
        <img src={Back} alt="IMG" />
      ) : item === "chest" ? (
        <img src={Chest} alt="IMG" style={{ width: "80px" }} />
      ) : item === "upper legs" || item === "lower legs" ? (
        <img src={Legs} alt="IMG" style={{ height: "60px", width: "60px" }} />
      ) : (
        <img src={Arms} alt="IMG" style={{ height: "50px", width: "50px" }} />
      )}
      <h2>{item}</h2>
    </div>
  );
}

export default BodyPart;
