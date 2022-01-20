import React from "react";
import "../scss/index.scss";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Sparks from "../img/Sparks.png"
import GrupoVal from "../img/GrupoVal.png"
import Skinder from "../img/SkinDer.png"
import UltraMedic from "../img/UltraMedic.png"
import Omer from "../img/Omer.png"
import Coiner from "../img/Coiner.png"
import Ultragenyx from "../img/Ultragenyx.png"
import Teva from "../img/Teva.png"
import Baxter from "../img/Baxter.png"
import Roche from "../img/Roche.png"
import Aga from "../img/Aga.png"
import Bpl from "../img/BPL.png"
import Eisai from "../img/eisai.png"
import Allergan from "../img/Allergan.png"
import Abbvie from "../img/abbvie.png"
function Socios() {
  return (
    <>

      <section data-aos="fade-up" data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" className="section sociost">

        <div className="contenedor">
          <h4 data-aos="fade-up"> <span role="img" aria-label="chispas">✨</span>Socios Comerciales<span role="img" aria-label="chispas">✨</span></h4>
          <div data-aos="fade-up" className="contenedor-socios">
            <div data-aos="fade-up" className="socio">
              <img src={Sparks} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={GrupoVal} alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src={Skinder} alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img
                src={UltraMedic}
                alt="socio"
              />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src={Omer} alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src={Coiner} alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img
                src={Ultragenyx}
                alt="socio"
              />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src={Teva} alt="socio" />
            </div>

            <div data-aos="fade-up" className="socio">
              <img src={Baxter} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={Roche} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={Aga} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={Bpl} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={Allergan} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={Eisai} alt="socio" />
            </div>
            <div data-aos="fade-up" className="socio">
              <img src={Abbvie} alt="socio" />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Socios;
