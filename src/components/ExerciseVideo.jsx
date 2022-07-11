import React from "react";

function ExerciseVideo({ exerciseVideos, exerciseDetail }) {
  if (!exerciseVideos.length) {
    return <div className="loading"></div>;
  } else {
    return (
      <section className="video">
        <h1>
          Videos for <span>{exerciseDetail.name}</span> exercise
        </h1>
        <div>
          {exerciseVideos?.slice(0, 3)?.map((item) => {
            return (
              <div key={item?.video?.videoId}>
                <img
                  src={item?.video?.thumbnails[0]?.url}
                  alt={item?.video?.title}
                />
                <h3>{item?.video?.title}</h3>
                <h4>{item?.video?.channelName}</h4>
                <h5>{item?.video?.lengthText}</h5>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default ExerciseVideo;
