import React, { useEffect } from 'react'
import { gsap } from "gsap"

import logo from '../img/logo-responsive.svg';
import Slogan from '../img/we-go-beyond.svg';
import '../scss/index.scss';


function Home() {

  useEffect(() => {
    gsap.from('.App-header', {
      duration: 3.3,
      y: '-100',
      opacity: 0,
      ease: 'ease-in',
    });

  }, [])
  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo go-pharma" />
        <img src={Slogan} className="slogan-img" alt="we go beyons the horizon" />


      </header>
      <section className="section">
        <div className="contenedor">
          <h1>Go-Pharma</h1>
          <h2>Somos una agencia de <span>CONSULTORÍA, MKT & MEDIA</span> especializada en el mercado <span>PHARMA</span> y el sector <span>SALUD. </span> Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a <span>RESULTADOS.</span></h2>
        </div>
      </section>

    </div>
  );
}

export default Home;
