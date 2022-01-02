import React, { useEffect } from 'react'


import logo from '../img/logo-responsive.svg';
import Slogan from '../img/we-go-beyond.svg';
import '../scss/index.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles








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


      <header data-aos="fade-in" className="App-header">
        <img src={logo} className="App-logo" alt="logo go-pharma" />
        <img src={Slogan} className="slogan-img" alt="we go beyons the horizon" />
      </header>


      <section data-aos="fade-up" className="section">
        <div className="contenedor">
          <h1>Go-Pharma</h1>
          <h2>Somos una agencia de <span>CONSULTORÍA, MKT & MEDIA</span> especializada en el mercado <span>PHARMA</span> y el sector <span>SALUD. </span> Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a <span>RESULTADOS.</span></h2>
        </div>
      </section>
      <section data-aos="fade-up" className="section">
        <div className="contenedor">
          <img src="/" alt="team" />
          <div className="texto">
            <h3>GO PHARMA TEAM</h3>
            <p className="h2">Somos un equipo <span>INTERDISCIPLINARIO</span> formado en la industria <span>PHARMA</span> en áreas como: <span>MEDICAL, MKT, VENTAS, DIGITAL, BUSINESS INTELLIGENCE, ACCESO, PUBLIC AFFAIRS,  PROGRAMAS de PACIENTES, FARMACOECONOMÍA y COMUNICACIÓN.</span> Contamos con experiencia en manejo de productos de diversas áreas terapéuticas: <span>ENFERMEDADES RARAS, NEUROLOGÍA, ONCOLOGÍA, REUMATOLOGÍA, DERMATOLOGÍA, DISPOSITIVOS MÉDICOS, PRIMARY CARE,</span> entre otras.</p>
          </div>

        </div>
      </section>

      <section data-aos="fade-up" className="section socios">
        <div className="contenedor">


          <h4>Socios Comerciales</h4>
          <div className="contenedor-socios">
            <div className="socio">
              <img src="https://go-pharma.mx/images/Sparks.png" alt="socio" />
            </div>
            <div className="socio">
              <img src="https://go-pharma.mx/images/GrupoVal.png" alt="socio" />
            </div>

            <div className="socio">
              <img src="https://go-pharma.mx/images/SkinDer.png" alt="socio" />
            </div>


            <div className="socio">
              <img src="https://go-pharma.mx/images/UltraMedic.png" alt="socio" />
            </div>

            <div className="socio">
              <img src="https://go-pharma.mx/images/Omer.png" alt="socio" />
            </div>

            <div className="socio">
              <img src="https://go-pharma.mx/images/Coiner.png" alt="socio" />
            </div>

            <div className="socio">
              <img src="https://go-pharma.mx/images/Ultragenyx.png" alt="socio" />
            </div>

            <div className="socio">
              <img src="https://go-pharma.mx/images/Teva.png" alt="socio" />
            </div>

            <div className="socio">
              <img src="https://go-pharma.mx/images/Baxter.png" alt="socio" />
            </div>
            <div className="socio">
              <img src="https://go-pharma.mx/images/Roche.png" alt="socio" />
            </div>
            <div className="socio">
              <img src="https://go-pharma.mx/images/Aga.png" alt="socio" />
            </div>
            <div className="socio">
              <img src="https://go-pharma.mx/images/BPL.png" alt="socio" />
            </div>

          </div>
        </div>


      </section>

    </>
  );
}

export default Home;
