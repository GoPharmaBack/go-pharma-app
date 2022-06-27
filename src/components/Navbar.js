import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'
import * as FaIcons from 'react-icons/fa'

// import Logo from "../../img/logo.png";
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

function Navbar () {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  useEffect(() => {
    navegador()
  })
  const navegador = () => {
    const navScr = document.getElementById('navScr')
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add('nav-colored')
        navScr.classList.remove('nav-transparent')
      } else {
        navScr.classList.add('nav-transparent')
        navScr.classList.remove('nav-colored')
      }
    }
  }

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top'
    })
  }, [])

  const Logo = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/gopharma.png?alt=media&token=f4a41dfa-8d31-4f37-9a9c-c8f4d76e30f2'
  return (
    <nav id="navScr" className="navbar " data-aos="fade-in">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu}>
        <img className="mt-1 logo-nav" src={Logo} alt="go-pharma" />

      </NavLink>
      <ul className={click ? 'navbar_menu active ' : 'navbar_menu'}>
        <NavLink to="/" className="navbar_menu_link home-icon" onClick={closeMobileMenu}>
          <FaIcons.FaHome />
        </NavLink>
        <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu}>
          <li> Nosotros </li> {/* {dropdown && <Dropdown />} */}
        </NavLink>
        <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu}>
          <li> Servicios </li>
        </NavLink>

        <NavLink
          to="/socios-comerciales"
          className={({ isActive }) => isActive ? 'active-nav' : ''}
          onClick={closeMobileMenu}
        >
          <li> Socios Comerciales </li>
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) => isActive ? 'active-nav' : ''}
          onClick={closeMobileMenu}
        >
          <li> Contacto </li>
        </NavLink>
        <ExternalLink href="https://www.instagram.com/gopharmamx/">
          <li>
            <FaIcons.FaInstagram />
          </li>
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com/gopharmamx/">
          <li>
            <FaIcons.FaFacebook />
          </li>
        </ExternalLink>

        <ExternalLink href="https://www.linkedin.com/company/marketing-and-media-go-pharma/">
          <li>
            <FaIcons.FaLinkedin />
          </li>
        </ExternalLink>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>

    </nav>
  )
}

export default Navbar
