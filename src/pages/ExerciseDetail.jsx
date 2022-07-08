import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, YToptions } from "../fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail({ loading, setLoading }) {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);

    const fetchDetails = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeUrl}/search?query=${exerciseDetailData.name} exercise`,
        YToptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchDetails();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <section>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideo
          exerciseVideos={exerciseVideos}
          exerciseDetail={exerciseDetail}
        />
        <SimilarExercises />
      </section>
    );
  }
}

export default ExerciseDetail;
