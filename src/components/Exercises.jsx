import React from "react";

function Exercises({ exercises, setExercises, bodyPart }) {
  return (
    <section className="exercises">
      <h1>Showing results</h1>
      <div>
        {exercises.map((exercise) => (
          <div key={exercise.id}>
            <h1>{exercise.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Exercises;
