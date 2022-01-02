import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import * as FaIcons from "react-icons/fa";
import Logo from '../img/logo.svg';
//import Logo from "../../img/logo.png";
import { gsap } from "gsap"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    navegador();
  });
  const navegador = () => {
    var navScr = document.getElementById("navScr");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add("nav-colored");
        navScr.classList.remove("nav-transparent");
      } else {
        navScr.classList.add("nav-transparent");
        navScr.classList.remove("nav-colored");
      }
    };
  };



  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 1.2, },
    })
    const NavAnimation = document.querySelectorAll(".navbar");
    tl.from(NavAnimation, { y: -50, stagger: 0.3 })

  }, [])


  return (
    <nav id="navScr" className="navbar ">
      <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
        <img src={Logo} alt="go-pharma" />

      </Link>
      <ul className={click ? "navbar_menu active " : "navbar_menu"}>
        <Link to="/" className="navbar_menu_link" onClick={closeMobileMenu}>
          <FaIcons.FaHome />
        </Link>
        <Link to="/work" className="navbar_menu_link" onClick={closeMobileMenu}>
          <li> Nosotros </li> {/* {dropdown && <Dropdown />} */}
        </Link>
        <Link to="/about" className="navbar_menu_link" onClick={closeMobileMenu}>
          <li> Servicios </li>
        </Link>

        <Link
          to="/resume-design"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Socios Comerciales </li>
        </Link>
        <Link
          to="/contact"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Contacto </li>
        </Link>
        <ExternalLink href="https://www.instagram.com/perrodimensional/">
          <li>
            <FaIcons.FaInstagram />
          </li>
        </ExternalLink>
        <ExternalLink href="https://github.com/crbzxy">
          <li>
            <FaIcons.FaFacebook />
          </li>
        </ExternalLink>

        <ExternalLink href="https://github.com/crbzxy">
          <li>
            <FaIcons.FaLinkedin />
          </li>
        </ExternalLink>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>

    </nav>
  );
}


export default Navbar;