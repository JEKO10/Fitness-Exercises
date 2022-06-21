import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(true);

  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <Link
        to="/"
        className={active && "active"}
        onClick={() => {
          setActive(true);
        }}
      >
        Home
      </Link>
      <Link
        to="/exercises"
        className={!active && "active"}
        onClick={() => {
          setActive(false);
        }}
      >
        Exercises
      </Link>
    </nav>
  );
}

export default Navbar;
