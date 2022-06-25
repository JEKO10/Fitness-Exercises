import React, { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../fetchData";

function Search() {
  const [query, setQuery] = useState("");
  const [exercises, setExercises] = useState([]);
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

  const handleSearch = async () => {
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
    </section>
  );
}

export default Search;
