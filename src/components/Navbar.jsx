import React from "react";
import Logo from "../assets/icons/Logo.png";
import { Link } from "react-router-dom";

function Navbar({ exerciseRef }) {
  return (
    <nav>
      <Link to="/" id="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/">Home</Link>
      <Link
        to="#"
        onClick={() => {
          window.scroll({
            top:
              exerciseRef.current.getBoundingClientRect().top + window.scrollY,
          });
        }}
      >
        Exercises
      </Link>
    </nav>
  );
}

export default Navbar;
