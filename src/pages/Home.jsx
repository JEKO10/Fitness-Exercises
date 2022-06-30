import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Exercises from "../components/Exercises";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <HeroBanner />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </>
  );
}

export default Home;
