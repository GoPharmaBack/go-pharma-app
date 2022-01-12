import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import 'aos/dist/aos.css';
import logo from '../img/logo-responsive.svg';
import { ExternalLink } from "react-external-link";
const Footer = () => {
  return (
    <>
      <section data-aos="fade-up" className="section background">
        <div data-aos="fade-up" className="contenedor">
          <h5 data-aos="fade-up">Conquistemos juntos nuevos horizontes. </h5>

          <div className="suscribe-form">
            {/* Begin Mailchimp Signup Form */}
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />

            <div id="mc_embed_signup">
              <form action="https://go-pharma.us17.list-manage.com/subscribe/post?u=06fe9037f09561112ee0081d6&id=212f57f4e5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">

                  <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_06fe9037f09561112ee0081d6_212f57f4e5" tabIndex={-1} defaultValue /></div>
                  <div className="clear "><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn-primario" /></div>
                </div>
              </form>
            </div>
            {/*End mc_embed_signup*/}
          </div>


        </div>

        <div className="custom-shape-divider-bottom-1641956409">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill" />
          </svg>
        </div>


      </section>
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
