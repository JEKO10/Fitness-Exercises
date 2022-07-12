import React from "react";
import Logo from "../assets/icons/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img src={Logo} alt="Logo" />
        <p>Golden Gym</p>
      </Link>
      <h2>Sweat, Smile and Repeat</h2>
    </footer>
  );
}

export default Footer;
