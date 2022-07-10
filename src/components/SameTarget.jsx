import React from "react";

function SameTarget({ target }) {
  return (
    <>
      <div className="exerciseCard">
        <img src={target.gifUrl} alt="GIF" loading="lazy" />
        <div>
          <button>{target.bodyPart}</button>
          <button>{target.target}</button>
        </div>
        <h1>{target.name}</h1>
      </div>
    </>
  );
}

export default SameTarget;
