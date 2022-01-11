import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import 'aos/dist/aos.css';
import logo from '../img/logo-responsive.svg';
import { ExternalLink } from "react-external-link";
const Footer = () => {
  return (
    <>
      <footer >
        <div className="contenedor grid" data-aos="fade-up">
          <div className="col-footer ">

            <img src={logo} className="logo-footer" alt="go-pharma" />
            <br />
            <small>Somos una agencia de CONSULTORÍA, MKT & MEDIA especializada en el mercado PHARMA y el sector SALUD.
            </small>
            <br />
            <small>
              Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a RESULTADOS.
            </small>

          </div>

          <div className="col-footer">
            <p className="titulo">Compañía</p>
            <ul>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/socios-comerciales">Socios Comerciales</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/contacto">Aviso de privacidad</Link></li>
              <div className="row"> <ExternalLink href="https://www.instagram.com/gopharmamx/">
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
                </ExternalLink></div>
            </ul>
          </div>
          <div className="col-footer"><iframe className='playlist' title='playlist' src="https://open.spotify.com/embed/playlist/2vpHrueDEGWmvGhSWfgxll?utm_source=generator" width="100%" height={380} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" /></div>
        </div>


      </footer>
      <div className="minifooter">
        <small>Copyright© Marketing and Media Go Pharma® <br />All rights reserved 2022.</small>
      </div>
    </>
  )
}

export default Footer
