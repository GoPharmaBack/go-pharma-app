import React from "react";
import "../scss/index.scss";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Socios() {
  return (
    <>

      <section data-aos="fade-up" data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" className="section sociost">

        <div className="contenedor">
          <h4 data-aos="fade-up"> ✨Socios Comerciales✨</h4>
          <div data-aos="fade-up" className="contenedor-socios">
            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Sparks.png" alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/GrupoVal.png" alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/SkinDer.png" alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img
                src="https://go-pharma.mx/images/UltraMedic.png"
                alt="socio"
              />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Omer.png" alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Coiner.png" alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img
                src="https://go-pharma.mx/images/Ultragenyx.png"
                alt="socio"
              />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Teva.png" alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Baxter.png" alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Roche.png" alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/Aga.png" alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src="https://go-pharma.mx/images/BPL.png" alt="socio" />
            </div>
          </div>
        </div>
      </section>

      <section className="section filosofia" data-aos="fade-up"  >

        <div className="contenedor" data-aos="fade-up">
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
    </>
  );
}

export default Socios;
