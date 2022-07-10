import React from "react";

function SameEquipment({ equipment }) {
  return (
    <div className="exerciseCard">
      <img src={equipment.gifUrl} alt="GIF" loading="lazy" />
      <div>
        <button>{equipment.bodyPart}</button>
        <button>{equipment.equipment}</button>
      </div>
      <h1>{equipment.name}</h1>
    </div>
  );
}

export default SameEquipment;
