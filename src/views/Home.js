import React, { useEffect } from 'react'


import logo from '../img/logo-responsive.svg';
import Slogan from '../img/we-go-beyond.svg';
import '../scss/index.scss';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    gsap.from('.App-header', {
      duration: 3.3,
      y: '-100',
      opacity: 0,
      ease: 'ease-in',
    });



  }, [])

  useEffect(() => {
    gsap.from('.section', {
      duration: 1.6,
      y: '-100',
      opacity: 0,
      ease: 'ease-in-out',
      scrollTrigger: {
        trigger: '.contenedor',

        start: 'bottom 90%',
        end: 'bottom 6%',
        toggleActions: 'restart complete reverse reset',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
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
