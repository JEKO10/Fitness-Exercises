import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <section className="hero">
      <div>
        <h2>Fitness Club</h2>
        <h1>
          Sweat, Smile <br />
          and Repeat
        </h1>
        <h3>Check out the most effective exercises personalized to you</h3>
        <button>
          <a href="#exercises">Explore Exercises</a>
        </button>
      </div>
      <img src={HeroBannerImage} alt="banner" />
    </section>
  );
}

export default HeroBanner;
