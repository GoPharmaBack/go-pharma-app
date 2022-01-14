import React, { useEffect } from 'react';

import logo from '../img/logo-responsive.svg';
import Slogan from '../img/we-go-beyond.svg';
import '../scss/index.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Socios from '../views/Socios';






function Home() {

  useEffect(() => {

    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, [])


  return (
    <>


      <header data-aos="fade-in" className="App-header-hero">
        <img src={logo} className="App-logo" alt="logo go-pharma" />
        <img src={Slogan} className="slogan-img" alt="we go beyons the horizon" />
      </header>




      <section data-aos="fade-up" className="section">
        <div className="contenedor" data-aos="fade-up">
          <h1 data-aos="fade-up">Go Pharma<sup>®</sup></h1>
          <h2 data-aos="fade-up">Somos una agencia de <span>CONSULTORÍA, MKT & MEDIA</span> especializada en el mercado <span>PHARMA</span> y el sector <span>SALUD. </span> Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a <span>RESULTADOS.</span></h2>
        </div>
      </section>
      <section data-aos="fade-up" className="section">
        <div className="contenedor" data-aos="fade-up">
          <div className="iframe-contenedor" data-aos="fade-up" ><iframe src="https://www.youtube.com/embed/hy_OH1hxpUo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>

          <div className="texto" data-aos="fade-up">
            <h3>GO PHARMA<sup>®</sup> TEAM</h3>
            <p className="h2">Somos un equipo <span>INTERDISCIPLINARIO</span> formado en la industria <span>PHARMA</span> en áreas como: <span>MEDICAL, MKT, VENTAS, DIGITAL, BUSINESS INTELLIGENCE, ACCESO, PUBLIC AFFAIRS,  PROGRAMAS de PACIENTES, FARMACOECONOMÍA y COMUNICACIÓN.</span> Contamos con experiencia en manejo de productos de diversas áreas terapéuticas: <span>ENFERMEDADES RARAS, NEUROLOGÍA, ONCOLOGÍA, REUMATOLOGÍA, DERMATOLOGÍA, DISPOSITIVOS MÉDICOS, PRIMARY CARE,</span> entre otras.</p>
          </div>

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
      <Socios />

    </>
  );
}

export default Home;
