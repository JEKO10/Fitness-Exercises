import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, YToptions } from "../fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SameTarget from "../components/SameTarget";
import SameEquipment from "../components/SameEquipment";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

function ExerciseDetail({ loading, setLoading }) {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [sameTarget, setSameTarget] = useState([]);
  const [sameEquipment, setSameEquipment] = useState([]);
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

      const sameTargetData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setSameTarget(sameTargetData);

      const sameEquimentData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setSameEquipment(sameEquimentData);
    };

    fetchDetails();
    setLoading(false);
  }, [id]);

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <h1 onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </h1>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <h1 onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </h1>
    );
  };

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <section className="pageDetail">
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideo
          exerciseVideos={exerciseVideos}
          exerciseDetail={exerciseDetail}
        />
        <h1>
          Exercises with <span>same target</span>
        </h1>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {sameTarget.map((target) => (
            <div
              key={target.id || target}
              itemId={target.id || target}
              title={target.id || target}
            >
              <SameTarget target={target} />
            </div>
          ))}
        </ScrollMenu>
        <h1>
          Exercises with <span>same equipment</span>
        </h1>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {sameEquipment.map((equipment) => (
            <div
              key={equipment.id || equipment}
              itemId={equipment.id || equipment}
              title={equipment.id || equipment}
            >
              <SameEquipment equipment={equipment} />
            </div>
          ))}
        </ScrollMenu>
      </section>
    );
  }
}

export default ExerciseDetail;
