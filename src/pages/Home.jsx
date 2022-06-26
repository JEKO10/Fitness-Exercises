import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";

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
    </>
  );
}

export default Home;
