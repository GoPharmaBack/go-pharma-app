import React from 'react'
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Nosotros() {
  return (
    <>

      <section data-aos="fade-up" className="section">
        <div className="contenedor">
          <h1 data-aos="fade-up">   Nosotros</h1>

          <h2 data-aos="fade-up">Somos una agencia de <span>CONSULTORÍA, MKT & MEDIA</span> especializada en el mercado <span>PHARMA</span> y el sector <span>SALUD. </span> Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a <span>RESULTADOS.</span></h2>
        </div>
      </section>

      <section className="section filosofia" data-aos="fade-up">
        <div className="contenedor ">
          <div className="texto">
            <h3 data-aos="fade-up">
              NUESTRA FILOSOFÍA
            </h3>
            <h4 data-aos="fade-up"> PATIENT CENTRICITY </h4>
            <p className='h2' data-aos="fade-in">&</p>
            <h4 data-aos="fade-up">CUSTOMER ENGAGEMENT </h4>
          </div>

        </div>
      </section>



    </>
  )
}

export default Nosotros
