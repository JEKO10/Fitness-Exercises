import React, { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../fetchData";
import ScrollBar from "./ScrollBar";

function Search({ setExercises, bodyPart, setBodyPart, setCurrentPage }) {
  const [query, setQuery] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchBodyData();
  }, []);

  const handleSearch = async (e) => {
    if (query) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(query) ||
          exercise.target.toLowerCase().includes(query) ||
          exercise.equipment.toLowerCase().includes(query) ||
          exercise.bodyPart.toLowerCase().includes(query)
      );

      setQuery("");
      setExercises(searchedExercises);
      setCurrentPage(0);
    }
  };

  return (
    <section className="search">
      <h1>
        Awesome Exercises You <br /> Should Know
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search exercises"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ScrollBar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </section>
  );
}

export default Search;
