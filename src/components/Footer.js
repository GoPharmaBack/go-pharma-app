import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import 'aos/dist/aos.css';
import logo from '../img/logo-responsive.svg';
import { ExternalLink } from "react-external-link";
const Footer = () => {
  return (
    <>
      <section data-aos="fade-up" className=" background">
        <div data-aos="fade-up" className="contenedor">
          <h5 data-aos="fade-up">  <span role="img" aria-label="cohete">🚀</span> <br /> Conquistemos juntos nuevos horizontes. </h5>

          <div className="suscribe-form">
            {/* Begin Mailchimp Signup Form */}
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />

            <div id="mc_embed_signup">
              <form action="https://go-pharma.us17.list-manage.com/subscribe/post?u=06fe9037f09561112ee0081d6&id=212f57f4e5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate data-aos="fade-up">
                <div id="mc_embed_signup_scroll">
                  <label className="label-email" htmlFor="Email">Recibe nuestra señal hasta tu galaxia... </label>
                  <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Escribe tu correo electrónico" required />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_06fe9037f09561112ee0081d6_212f57f4e5" tabIndex={-1} defaultValue /></div>
                  <div className="clear "><input type="submit" defaultValue="Subscribirse" name="subscribe" id="mc-embedded-subscribe" className="button btn-primario" /></div>
                </div>
              </form>
            </div>
            {/*End mc_embed_signup*/}
          </div>


        </div>

        <div className="custom-shape-divider-bottom-1642110592">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>


      </section>
      <footer >
        <div className="contenedor grid" data-aos="fade-up">
          <div className="contenedor-mapa">
            <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60219.2867853589!2d-99.21072112089844!3d19.38190370000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffee58450ff3%3A0xd1b17bf5a6861cef!2sGO%20PHARMA!5e0!3m2!1ses-419!2smx!4v1642183790827!5m2!1ses-419!2smx" height={250} style={{ border: 0 }} allowFullScreen loading="lazy" />

          </div>
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
              <li><Link to="/aviso-de-privacidad">Aviso de privacidad</Link></li>
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
          <div className="col-footer">

            <iframe title="playlist" className="playlist" src="https://open.spotify.com/embed/playlist/2JvfdVFmxhdb5mKfF5UQLQ?utm_source=generator" width="100%" height={380} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />

          </div>
        </div>


      </footer>
      <div className="minifooter">
        <small>Copyright© Marketing and Media Go Pharma® <br />All rights reserved 2022.</small>
      </div>
    </>
  )
}

export default Footer
