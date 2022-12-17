import React from 'react'
import sun from "./../img/icons/sun.svg";
import moon from "./../img/icons/moon.svg";
import "./darkModeStyle.css";

const BtnDarkMode = () => {
    const toggleDarkMode=() =>{
        
    }
  return (
    <button className="dark-mode-btn" onClick={}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
  )
}

export default BtnDarkMode;