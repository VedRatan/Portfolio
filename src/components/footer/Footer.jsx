import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer>

<div className="footer__container container">
    <h1 className="footer__title">Ved</h1>

    <ul className="footer__list">
        <li>
            <a href="#about" className="footer__link">About</a>
        </li>
    </ul>

    <div className="footer__social">
    <a href="https://www.instagram.com/vedratan95/" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/vedratan/" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin-alt"></i>
        </a>
        
        <a href="https://github.com/VedRatan" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
    </div>

    <span className="footer__copy">All rights reserved</span>
   </div>


    </footer>
  );
}

export default Footer