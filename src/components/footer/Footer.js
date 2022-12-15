import React from 'react';
import "./footerStyle.css";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import mail1 from "./../../img/icons/icons8-mail.svg";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://github.com/Kh82Olga" target="_blank">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/olga-kharchuk-46012417a" target="_blank">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="mailto:kh82olga@protonmail.com">
                  <img src={mail1} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer