import React from "react";
import Logo from "../assets/icons/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" id="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/">Home</Link>
      <a href="#exercises">Exercises</a>
    </nav>
  );
}

export default Navbar;
