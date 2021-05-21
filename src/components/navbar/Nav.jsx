import React from "react";
import Logo from "../../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="outer">
      <Link to="/">
        <div className="inner">
          <img src={Logo} alt="Logo" className="logoHenry" />
          <h1>Weather App</h1>
        </div>
      </Link>
      <Link to="/about" className="btn-a">
        <span>Sobre mi</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
