import React from "react";
import "./about.css";

import Git from "../../img/github.png";
import Linke from "../../img/linkedin.png";

export default function About() {
  return (
    <div className="main center">
      <div className="card">
        <div className="content center">
          <div className="about-content">
            <h2>Pablo Garay</h2>
            <p>FullStack Developer</p>
          </div>
        </div>
        <div className="icons center">
          <a
            href="https://github.com/814942"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon-git" src={Git} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/pablo-garay-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon-linke" src={Linke} alt="Likedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
