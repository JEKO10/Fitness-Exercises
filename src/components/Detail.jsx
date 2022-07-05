import React from "react";
import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraInfo = [
    {
      img: BodyPartImg,
      name: bodyPart,
    },
    { img: TargetImg, name: target },
    {
      img: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <section className="detail">
      <img src={gifUrl} alt={name} loading="lazy" />
      <div className="info">
        <h1>{name}</h1>
        <p>
          Exercises keep you strong.
          <span style={{ textTransform: "capitalize" }}>{name}</span>
          bup is one of the best <br /> exercises to target your
          {exerciseDetail.target}. It will help you improve your <br /> mood and
          gain energy.
        </p>
        {extraInfo.map((info) => (
          <div>
            <button>
              <img src={info.img} alt="info" />
            </button>
            <h3>{info.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Detail;
