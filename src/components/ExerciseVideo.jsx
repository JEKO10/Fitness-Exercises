import React from "react";

function ExerciseVideo({ videoData }) {
  return (
    <section className="video">
      {videoData?.slice(1, 7)?.map((item) => {
        return (
          <div key={item.video.videoId}>
            <h1>{item.video.title}</h1>
            <h3>{item.video.channelName}</h3>
            <h3>{item.video.lengthText}</h3>
          </div>
        );
      })}
    </section>
  );
}

export default ExerciseVideo;
