import React from 'react';
import { Link } from "react-router-dom";
import Imagen from "../img/DigitalMKTPharma.png"
function Servicios() {
  return (
    <section className="section background" >
      <div className="contenedor servicios">
        <header data-aos="fade-in">
          <h1>Portafolio de servicios 360</h1>
          <p>ALINEADOS Y ENFOCADOS EN LOS OBJETIVOS DE NUESTROS SOCIOS COMERCIALES. </p>
          <Link className="btn-primario" to="/">Contáctanos</Link>
        </header>
        <div className="servicios-contenedor">
          <div className="servicio" data-aos="fade-in">
            <img src={Imagen} alt="servicio" />
            <p className="titulo">Market Research</p>
            <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus officia assumenda. Quidem autem exercitationem nostrum blanditiis nobis odio dolorem.</p>

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
