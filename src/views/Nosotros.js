import React from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Socios from "../views/Socios";
import Team from "../components/Team";
function Nosotros() {
  return (
    <>
      <section data-aos="fade-up" className="section nosotros">
        <div className="contenedor">
          <h1 data-aos="fade-up"> Nosotros</h1>

          <h2>
            Somos una agencia de <span>CONSULTORÍA, MKT & MEDIA</span>{" "}
            especializada en el mercado <span>PHARMA</span> y el sector{" "}
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
          <h2 data-aos="fade-up">PILARES</h2>
          <div className="contenedor-pilares">
            <div data-aos="fade-up" className="col">
              <h3>1</h3>
              <p className="h2">
                Creamos vínculos basados en la credibilidad, confianza compromiso
                y vulnerabilidad.
              </p>
            </div>
            <div data-aos="fade-up" className="col">
              <h3>2</h3>
              <p className="h2">
                Trabajamos en equipo cuidando al máximo cada detalle.{" "}
              </p>
            </div>
            <div data-aos="fade-up" className="col">
              <h3>3</h3>
              <p className="h2">
                Mantenemos el orden y constancia en todo momento.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="contenedor">
          <div className="texto mt-3" data-aos="fade-up">
            <h2>GO PHARMA<sup>®</sup> TEAM</h2>
            <p className="h2">
              Somos un equipo <span>INTERDISCIPLINARIO<span/> formado en la industria <span>PHARMA<span/> en áreas como: <span>MEDICAL, MKT, VENTAS, DIGITAL, BUSINESS INTELLIGENCE, ACCESO, PUBLIC AFFAIRS,  PROGRAMAS de PACIENTES, FARMACOECONOMÍA y COMUNICACIÓN.<span/> Contamos con experiencia en manejo de productos de diversas áreas terapéuticas: <span>ENFERMEDADES RARAS, NEUROLOGÍA, ONCOLOGÍA, REUMATOLOGÍA, DERMATOLOGÍA, DISPOSITIVOS MÉDICOS, PRIMARY CARE,<span/> entre otras.</p>
          </div>
        </div>
      </section>

      <Team />
      <Socios />
    </>
  );
}

export default Nosotros;
