import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail({ loading, setLoading }) {
  const [exerciseDetail, setExerciseDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const exerciseDb = "https://exercisedb.p.rapidapi.com";
      setLoading(true);

      const exerciseDbData = await fetchData(
        `${exerciseDb}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDbData);
      setLoading(false);
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <section>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideo />
        <SimilarExercises />
      </section>
    );
  }
}

export default ExerciseDetail;
