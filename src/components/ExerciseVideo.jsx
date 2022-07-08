import React from "react";

function ExerciseVideo({ exerciseVideos, exerciseDetail }) {
  if (!exerciseVideos.length) {
    return <div className="loading"></div>;
  } else {
    return (
      <section className="video">
        <h1>Videos for {exerciseDetail.name} exercise</h1>
        {exerciseVideos?.slice(0, 6)?.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={item?.video?.thumbnails[0]?.url}
                alt={item?.video?.title}
              />
              <h1>{item?.video?.title}</h1>
              <h3>{item?.video?.channelName}</h3>
              <h3>{item?.video?.lengthText}</h3>
            </div>
          );
        })}
      </section>
    );
  }
}
export default ExerciseVideo;
