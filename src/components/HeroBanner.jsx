import React from "react";
import HeroBannerImage from "../assets/images/banner.png";
import { Link } from "react-router-dom";

function HeroBanner({ exerciseRef }) {
  return (
    <section className="hero">
      <div>
        <h2>Fitness Club</h2>
        <h1 id="title">Sweat, Smile and Repeat</h1>
        <h3>Check out the most effective exercises personalized to you</h3>
        <button>
          <Link
            to="#"
            onClick={() => {
              window.scroll({
                top:
                  exerciseRef.current.getBoundingClientRect().top +
                  window.scrollY,
              });
            }}
          >
            Explore Exercises
          </Link>
        </button>
        <h1 id="bg">Exercise</h1>
      </div>
      <img src={HeroBannerImage} alt="banner" />
    </section>
  );
}

export default HeroBanner;
