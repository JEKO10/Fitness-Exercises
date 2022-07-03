import React from "react";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";

function Exercises({ exercises, currentPage, setCurrentPage }) {
  const offset = currentPage * 8;
  const currentPageData = exercises.slice(offset, offset + 8);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <section className="exercises">
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
          pageCount={Math.ceil(exercises.length / 8)}
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

export default Exercises;
