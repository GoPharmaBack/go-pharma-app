import React from 'react'
import { Link } from 'react-router-dom'
// import Imagen from "../img/DigitalMKTPharma.png"

import 'aos/dist/aos.css' // You can also use <link> for styles

function Servicios () {
  return (
    <section className="section background" >
      <div className="contenedor servicios">
        <header className='header-servicios' data-aos="fade-in">
          <div className="contenedor">
            <div className="texto">
              <h1>
                Portafolio de Servicios 360°
              </h1>
              <p className="h2">ALINEADOS Y ENFOCADOS EN LOS OBJETIVOS DE NUESTROS SOCIOS COMERCIALES. </p>
              <br />
              <Link className="btn-primario" to="/contacto">Contáctanos</Link>
            </div>
          </div>
        </header>

        <div className="section grupo-servicios" data-aos="fade-in">
          <h3>MKT PHARMA</h3>
          <div className="servicios-contenedor" data-aos="fade-in">
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FBrand-Strategy.png?alt=media&token=4cce3bcb-8b2f-4456-94ec-44a3aff07f61" alt="" />
              <p className="titulo">BRAND STRATEGY & PHARMA VISUAL CONCEPT </p>
              <p>En alianza con nuestros clientes y conjunto a nuestro gran equipo creativo, damos vida y personalidad a las marcas, incluso dentro del mercado farmacéutico, nos caracterizan nuestras propuestas innovadoras, que aseguran marcar el paso a la siguiente generación </p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FMarket-Research.png?alt=media&token=a75237de-3027-47f4-8cce-211664a890aa" alt="" />
              <p className="titulo">MARKET RESEARCH </p>
              <p>A través de estudios especializados e investigaciones de la mano de expertos médicos, creamos en conjunto con nuestros clientes planes de inteligencia de mercados enfocados en los principales objetivos: ENGAGEMENT - PACIENT QOL - ITT </p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FAdvisory-Board.png?alt=media&token=7caabe1b-9a19-4f24-bd46-576bc00fec3b" alt="" />
              <p className="titulo">ADVISORY BOARD</p>
              <p>Contamos con una amplia base de datos de especialistas en las áreas de ONCOLOGÍA, NEFROLOGÍA, ENDOCRINOLOGÍA, GENÉTICA, MEDICINA GENERAL, DERMATOLOGÍA y más, que suman invariablemente a las propuestas estratégicas que planteamos a nuestros clientes.</p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FMedical-content.png?alt=media&token=c325a0f5-341c-4f4f-81e9-e9b1b5187cab" alt="" />
              <p className="titulo">MEDICAL CONTENT/ DISEASE AWARENESS/ PATIENT SUPPORT PROGRAMS </p>
              <p>El sector salud tiene importantes particularidades y sabemos que es necesario conocerlas y entenderlas para desarrollar una estrategia exitosa, por lo que en GO PHARMA contamos con un equipo de médicos líderes en el sector que cuentan con experiencia y profundo conocimiento para ayudar a nuestros clientes a desarrollar metodologías y estrategias propias, optimizadas y con enfoque en el paciente.</p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FMarket-Access.png?alt=media&token=dc31de8f-bea5-4e1a-9b63-b2f7c6cbb6fa" alt="" />
              <p className="titulo">MARKET ACCESS </p>
              <p>
                Analizamos las necesidades del sector salud para desarrollar estrategias coherentes con las

                prioridades estratégicas de nuestros clientes.
              </p>

            </div>
          </div>
        </div>

        <div className="section grupo-servicios">
          <h3>DIGITAL MKT PHARMA </h3>
          <div className="servicios-contenedor" data-aos="fade-in">
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FSocial-Media-Engagement.png?alt=media&token=2835a660-1778-4700-9373-a69d88c26a5b" alt="" />
              <p className="titulo">SOCIAL MEDIA ENGAGEMENT  </p>
              <p>La omnicanalidad es un concepto cada vez más conocido y necesario para las marcas de todas las industrias, un punto clave para este contacto son las redes sociales, con contenido y formatos clave nos aseguramos de ser aliados de valor.  </p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FWeb-%26-app-Development.png?alt=media&token=0121cdc5-1031-4645-90cd-0d5c5dc158ca" alt="" />
              <p className="titulo">WEB & APP DEVELOPMENT </p>
              <p>Contar con varios puntos de contacto en el plano digital jamás había sido tan importante, tenemos experiencia en la creación de sitios web interactivos y aplicaciones móviles que lleven información crucial sobre nuestros clientes y catálogos, disponible en todos los dispositivos en todo momento.  </p>

            </div>

          </div>
        </div>

        <div className="section grupo-servicios">
          <h3>VIDEO, SHOOTING & FILM PRODUCTION  </h3>
          <div className="servicios-contenedor" data-aos="fade-in">
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FStreaming-%26-Live-Production.png?alt=media&token=1f3c4b49-ec8f-47f9-8f7c-a086516faca7" alt="" />
              <p className="titulo">STREAMING & LIVE PRODUCTION  </p>
              <p>El FORO GO PHARMA está equipado para satisfacer las nuevas necesidades digitales de nuestros clientes, desde eventos EN VIVO hasta capacitaciones grabadas, hemos sumado nuestros servicios de producción de video a las estrategias comerciales de nuestros clientes. </p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FPrint-%26-Promo.png?alt=media&token=fd583695-ee4b-426a-8265-14f40700e937" alt="" />
              <p className="titulo">PRINT, PROMO & EDITORIAL EVENT EXPERIENCE & PRODUCTION  </p>
              <p>Con nuestro servicio in-house de impresión y taller de producción, somos aliados efectivos para la producción de recursos promocionales para eventos de la industria. Tenemos el mayor expertise en la producción de eventos de alto impacto, asegurando calidad y cuidado en cada detalle.  </p>

            </div>
            <div className="servicio" data-aos="fade-in">
              <img src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/services%2FCatering-Concierge.png?alt=media&token=45c72237-c85d-4a29-b559-8f7fcdad7348" alt="" />
              <p className="titulo">CATERING CONCIERGE </p>
              <p>Ofrecemos nuestras opciones de catering y asistencia durante eventos como un plus para nuestros clientes, atendiendo de manera personalizada cada punto de contacto con el cliente final</p>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
