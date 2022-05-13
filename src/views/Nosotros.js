import React from 'react'
import 'aos/dist/aos.css' // You can also use <link> for styles
import Socios from '../views/Socios'
import Team from '../components/Team'
// const Star = 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e'
const Clay =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2Fclay%402x.png?alt=media&token=847a0e52-0aae-4730-b2fc-f58f896961e1'
const Star =
  'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/3d-elements%2FStar.png?alt=media&token=530337ee-8115-4965-86d0-4d1a713f4e3e'

function Nosotros () {
  return (
    <>
      <section className='section nosotros' data-aos='fade-up'>
        <div className='container'>
          <div className='row-nosotros' data-aos='fade-up'>
            <div className='col'>
              <h1 className='title'>Nosotros</h1>
            </div>
            <div className='col '>
              <h2>
                Somos una agencia de <span>CONSULTORÍA, MKT &amp; MEDIA </span>
                especializada en el mercado <span>PHARMA</span> y el sector{' '}
                <span>SALUD. </span> Desarrollamos estrategias integradas desde
                market research hasta la ejecución de la planeación, siempre
                enfocados a <span>RESULTADOS.</span>
              </h2>
            </div>
          </div>
          <div className='contenedor container-3d' data-aos='fade-up'>
            <img src={Clay} alt='nube' />
          </div>
          <br />
          <br />
          <div className='row beneficios'>
            <div className='contenedor-beneficios'>
              <h3>Beneficios de trabajar con nosotros</h3>
              <div className='contenedor-beneficios-lista' data-aos='fade-up'>
                <div className='col'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <div className='texto'>
                    <p className='titulo' data-aos='fade-up'>
                      Misión
                    </p>
                    <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                      Desarrollamos estrategias personalizadas encaminadas a que
                      nuestros clientes logren comunicar estratégicamente el
                      valor de su producto o servicio para alcanzar sus metas y
                      objetivos{' '}
                    </p>
                  </div>
                </div>
                <div className='col'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <div className='texto'>
                    <p className='titulo' data-aos='fade-up'>
                      Nuestra Experiencia
                    </p>
                    <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                      Contamos con experiencia en manejo de productos de
                      diversas áreas terapéuticas:{' '}
                      <span>
                        ENFERMEDADES RARAS, NEUROLOGÍA, ONCOLOGÍA, REUMATOLOGÍA,
                        DERMATOLOGÍA, DISPOSITIVOS MÉDICOS, PRIMARY CARE,
                      </span>{' '}
                      entre otras.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row pilares'>
            <div className='contenedor-beneficios '>
              <h3 data-aos='fade-up' className='text-left'>
                NUESTROS PILARES
              </h3>
              <div className='contenedor-beneficios-lista' data-aos='fade-up'>
                <div className='col k p-2'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <p className='titulo' data-aos='fade-up'>
                    Confianza
                  </p>
                  <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                    Creamos vínculos basados en la credibilidad, co nfianza
                    compromiso y vulnerabilidad.{' '}
                  </p>
                </div>
                <div className='col k p-2'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <p className='titulo' data-aos='fade-up'>
                    Organización
                  </p>
                  <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                    Trabajamos en equipo cuidando al máximo cada detalle.
                  </p>
                </div>
                <div className='col k p-2'>
                  <img
                    className='img-responsive'
                    src={Star}
                    alt='Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD.'
                  />
                  <p className='titulo' data-aos='fade-up'>
                    Constancia
                  </p>
                  <p data-aos='fade-up' className='h4 aos-init aos-animate'>
                    Mantenemos el orden y constancia en todo momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section filosofia' data-aos='fade-up'>
        <div className='container-fluid '>
          <div className='texto'>
            <h3 data-aos='fade-up'>NUESTRA FILOSOFÍA</h3>
            <h4 data-aos='fade-up'> PATIENT CENTRICITY </h4>
            <p className='h2' data-aos='fade-in'>
              &
            </p>
            <h4 data-aos='fade-up'>CUSTOMER ENGAGEMENT </h4>
          </div>
        </div>
      </section>

      <Team />
      <Socios />
    </>
  )
}

export default Nosotros
