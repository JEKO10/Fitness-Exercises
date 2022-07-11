import React from "react";
import { Link } from "react-router-dom";

function SameTarget({ target }) {
  return (
    <>
      <Link className="exerciseCard" to={`/exercise/${target.id}`}>
        <img src={target.gifUrl} alt="GIF" loading="lazy" />
        <div>
          <button>{target.bodyPart}</button>
          <button>{target.target}</button>
        </div>
        <h1>{target.name}</h1>
      </Link>
    </>
  );
}

export default SameTarget;
