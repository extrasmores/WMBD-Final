import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/popcorn-svgrepo-com.svg'


 const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__row">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} className="logo footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link nav__link link__hover-effect">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link nav__link link__hover-effect">
              Movies
            </Link>
            <Link to="/cart" className="footer__link nav__link link__hover-effect">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2021 Library</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
