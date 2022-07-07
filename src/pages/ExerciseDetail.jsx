import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, YToptions } from "../fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail({ loading, setLoading }) {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [videoData, setVideoData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";
      setLoading(true);

      const exerciseDbData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDbData);

      const youtubeData = await fetchData(
        `${youtubeUrl}/search?query=${exerciseDetail.name}`,
        YToptions
      );

      setVideoData(youtubeData.contents);
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
        <ExerciseVideo videoData={videoData} />
        <SimilarExercises />
      </section>
    );
  }
}

export default ExerciseDetail;
