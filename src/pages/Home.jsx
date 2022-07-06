import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Exercises from "../components/Exercises";

function Home({ loading, setLoading }) {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <HeroBanner />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setCurrentPage={setCurrentPage}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}

export default Home;
