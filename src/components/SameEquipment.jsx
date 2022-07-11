import React from "react";
import { Link } from "react-router-dom";

function SameEquipment({ equipment }) {
  return (
    <Link className="exerciseCard" to={`/exercise/${equipment.id}`}>
      <img src={equipment.gifUrl} alt="GIF" loading="lazy" />
      <div>
        <button>{equipment.bodyPart}</button>
        <button>{equipment.equipment}</button>
      </div>
      <h1>{equipment.name}</h1>
    </Link>
  );
}

export default SameEquipment;
