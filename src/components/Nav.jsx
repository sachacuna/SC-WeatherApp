import React from "react";
import Logo from "../img/sc.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <img
          id="logoSC"
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="SC logo"
        />
        <span className="navbar-brand">CHECK THE WEATHER</span>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/About">
        <span className="navbar-brand">About</span>
      </Link>
    </nav>
  );
}

export default Nav;
