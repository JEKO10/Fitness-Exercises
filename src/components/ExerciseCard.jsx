import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <Link className="exerciseCard" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="GIF" loading="lazy" />
      <div>
        <button>{exercise.bodyPart}</button>
        <button>{exercise.target}</button>
      </div>
      <h1>{exercise.name}</h1>
    </Link>
  );
}

export default ExerciseCard;
