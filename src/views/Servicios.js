import React from 'react';
import { Link } from "react-router-dom";
import Imagen from "../img/DigitalMKTPharma.png"

import 'aos/dist/aos.css'; // You can also use <link> for styles


function Servicios() {
  return (
    <section className="section background" >
      <div className="contenedor servicios">
        <header className='header-servicios' data-aos="fade-in">
          <div className="contenedor">
            <div className="texto">
              <h1>
                Portafolio de Servicios 360°
              </h1>
              <p>ALINEADOS Y ENFOCADOS EN LOS OBJETIVOS DE NUESTROS SOCIOS COMERCIALES. </p>
              <br />
              <Link className="btn-primario" to="/">Contáctanos</Link>
            </div>
          </div>
        </header>
        <div className="servicios-contenedor" data-aos="fade-in">
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Market Research</p>


          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Advisory Board</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Medical Content</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Disease Awareness</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Data Science</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Brand Strategy</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Public Affairs & Advocacy Strategy</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Pharma Visual Concept</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Digital MKT Pharma</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Social Media Engagement</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">WEB & APP Development</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Video, Shooting & Film Production</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Streaming & Live Production</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Print, Promo & Editorial</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Event Experience & Production</p>

          </div>
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">CaterinG concierge</p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Servicios
