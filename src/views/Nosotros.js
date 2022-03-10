import React from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Socios from "../views/Socios";
import Team from "../components/Team";
const Star = "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e"

function Nosotros() {
  return (
    <>
      <section data-aos="fade-up" className="section nosotros">
        <div className="contenedor">
          <h1 data-aos="fade-up"> Nosotros</h1>

          <h2>
            Somos una agencia de <span>CONSULTORÍA, MKT &amp; MEDIA </span>
            especializada en el mercado <span>PHARMA</span> y el sector
            <span>SALUD. </span> Desarrollamos estrategias integradas desde
            market research hasta la ejecución de la planeación, siempre
            enfocados a <span>RESULTADOS.</span>
          </h2>

          <h3 data-aos="fade-up">Misión</h3>
          <p data-aos="fade-up" className="h2">
            Desarrollamos estrategias personalizadas encaminadas a que nuestros
            clientes logren comunicar estratégicamente el valor de su producto o
            servicio para alcanzar sus metas y objetivos{" "}
          </p>
          <h3 data-aos="fade-up">Nuestra Experiencia </h3>
          <p data-aos="fade-up" className="h2">
            Contamos con experiencia en manejo de productos de diversas áreas
            terapéuticas:{" "}
            <span>
              ENFERMEDADES RARAS, NEUROLOGÍA, ONCOLOGÍA, REUMATOLOGÍA,
              DERMATOLOGÍA, DISPOSITIVOS MÉDICOS, PRIMARY CARE,
            </span>{" "}
            entre otras.{" "}
          </p>
        </div>
      </section>

      <section className="section filosofia" data-aos="fade-up">
        <div className="contenedor ">
          <div className="texto">
            <h3 data-aos="fade-up">NUESTRA FILOSOFÍA</h3>
            <h4 data-aos="fade-up"> PATIENT CENTRICITY </h4>
            <p className="h2" data-aos="fade-in">
              &
            </p>
            <h4 data-aos="fade-up">CUSTOMER ENGAGEMENT </h4>
          </div>
        </div>
      </section>
      <section data-aos="fade-up">
        <div className="contenedor pilares" data-aos="fade-up">
          <h1 data-aos="fade-up" class="aos-init aos-animate">PILARES</h1>
          <div className="contenedor-pilares">
            <div data-aos="fade-up" className="col">
              <img src={Star} className="img-star " alt="" />
              <p className="h2">
                Creamos vínculos basados en la credibilidad, confianza compromiso
                y vulnerabilidad.
              </p>
            </div>
            <div data-aos="fade-up" className="col">
              <img src={Star} className="img-star " alt="" />
              <p className="h2">
                Trabajamos en equipo cuidando al máximo cada detalle.{" "}
              </p>
            </div>
            <div data-aos="fade-up" className="col">
              <img src={Star} className="img-star " alt="" />
              <p className="h2">
                Mantenemos el orden y constancia en todo momento.{" "}
              </p>
            </div>
          </div>
        </div>


      </section>

      <Team />
      <Socios />
    </>
  );
}

export default Nosotros;
