import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pizzaLogo.png";
import burguerIcon from "../assets/burguerIcon.png";
import "../styles/navbar.css";
export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="left-side" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="pizza logo" />
        <div className="hidden-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>{" "}
        <button onClick={toggleNavbar}>
          <img src={burguerIcon} alt="ico" />
        </button>
      </div>
    </div>
  );
}
