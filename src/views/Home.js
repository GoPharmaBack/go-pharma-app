import React, { useEffect } from 'react';

import logo from '../img/logo-responsive.svg';
import Slogan from '../img/we-go-beyond.svg';
import '../scss/index.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Socios from '../views/Socios';
import Team from '../components/Team'


const Clay = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2Fclay%402x.png?alt=media&token=847a0e52-0aae-4730-b2fc-f58f896961e1'
// const PlanetaNube2 = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FCloud%20%26%20Planet%2002.png?alt=media&token=da2433b1-41d7-4522-b3b9-9965276fce53'

// const Cohete = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FSpaceship.png?alt=media&token=8a39bf08-6961-496a-884f-7fadfe5a7f44'

// const Nube = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FCloud01.png?alt=media&token=53093a4f-51e5-4c9d-ab8d-4725fb73fb3f'

// const Star = "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e"

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
          <h2 data-aos="fade-up">Somos una agencia de <span>CONSULTORÍA, MKT & MEDIA </span>especializada en el mercado <span>PHARMA</span> y el sector <span>SALUD. </span> Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a <span>RESULTADOS.</span></h2>
        </div>
        <div className="contenedor container-3d" data-aos="fade-up">
          <img src={Clay} alt="nube" data-aos="fade-up" />

          {/* 
          <div className="container-star">
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
            <img src={Star} alt="Star" data-aos="fade-up" />
          </div> */}

        </div>
      </section>
      <section data-aos="fade-up" className="section">
        <div className="contenedor" data-aos="fade-up">

          <div className="iframe-contenedor" >

            <div style={{ padding: '75% 0 0 0', position: 'relative' }}>

              <iframe className="iframe-video" src="https://player.vimeo.com/video/668322181?h=f15f9ccf67&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="go-pharma presentacion" /></div>
          </div>

          <br />
          <Team />
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
