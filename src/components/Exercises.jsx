import React, { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";
import { fetchData, exerciseOptions } from "../fetchData";

function Exercises({
  exercises,
  setExercises,
  currentPage,
  setCurrentPage,
  bodyPart,
  loading,
  setLoading,
  exerciseRef,
}) {
  const offset = currentPage * 9;
  const currentPageData = exercises.slice(offset, offset + 9);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);

    window.scroll({
      top: exerciseRef.current.getBoundingClientRect().top + window.scrollY,
    });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      setLoading(true);

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
      setLoading(false);
    };

    fetchExercisesData();
  }, [bodyPart]);

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <section className="exercises" ref={exerciseRef} id="exercises">
        <h1>Showing results</h1>
        <div>
          {currentPageData.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
        {exercises && (
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={Math.ceil(exercises.length / 9)}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            nextLinkClassName="next"
            previousLinkClassName="prev"
            activeClassName="active"
          />
        )}
      </section>
    );
  }
}
export default Exercises;
