import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <section className="hero">
      <div>
        <h2>Fitness Club</h2>
        <h1 id="title">
          Sweat, Smile <br />
          and Repeat
        </h1>
        <h3>Check out the most effective exercises personalized to you</h3>
        <button>
          <a href="#exercises">Explore Exercises</a>
        </button>
        <h1 id="bg">Exercise</h1>
      </div>
      <img src={HeroBannerImage} alt="banner" />
    </section>
  );
}

export default HeroBanner;
