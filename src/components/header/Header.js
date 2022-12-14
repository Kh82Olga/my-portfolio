import React from "react";
import "./headerStyle.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Olga</em>
          </strong>
          <br />a Fullstack Developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="/download_cv/Kharchuk_Olga_CV_nl.pdf"
          target={"_blank"}
          /* download */
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
