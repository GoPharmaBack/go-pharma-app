import React from 'react'

// import * as FaIcons from "react-icons/fa";
import 'aos/dist/aos.css'

function Team () {
  const data = [
    {
      id: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team9.png?alt=media&token=697585e8-63ce-4857-bdc6-c99c40792f6d',
      name: 'Frank Valdez Tapia',
      position: 'CEO',
      hobbies: 'Ser DJ, crear música, actualizarse'
    },
    {
      id: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team25.png?alt=media&token=e136a264-1565-4672-8c0c-99c330507c17',
      name: 'Brenda Carolina Cruz Morales',
      position: 'MKT Coordinator',
      hobbies: 'Escuchar música, leer,aprender cosas nuevas'
    },
    {
      id: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team2.png?alt=media&token=092865cf-a8f7-46c3-8e7a-fc4263ffca8b',
      name: 'Carolina Fernández  Alarcón',
      position: 'Art & Audiovisual Director',
      hobbies: 'Pintura, maquillaje ,video juegos ,hornear'
    },
    {
      id: 4,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team21.png?alt=media&token=ec4f5856-6aec-42e6-871e-c73d00461818',
      name: 'Rafael Navarro ',
      position: 'Medical Director',
      hobbies: 'Leer, acampar, pintura'
    },
    {
      id: 5,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team11.png?alt=media&token=586b58c8-0f1e-46af-a0df-caabfd4a555d',
      name: 'Diana Aréchiga Gómez Luna',
      position: 'Commercial Excellence Manager',
      hobbies: 'Fotografía, leer, actividades al aire libre'
    },
    {
      id: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team23.png?alt=media&token=4504caaa-d686-42bb-b415-6e0ecc4234ec',
      name: 'Marisol Molina Medina',
      position: 'MSL',
      hobbies: 'Hacer ejercicio en grupo, pasear a su perro, leer'
    },
    {
      id: 7,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team17.png?alt=media&token=1b0dcfae-4331-46ae-9b97-51f613366952',
      name: 'Selene Monserrat Meraz Castañeda',
      position: 'Sr. Pharma Designer',
      hobbies: 'Pintura, leer, videojuegos'
    },
    {
      id: 8,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team20.png?alt=media&token=58d792f4-a730-4648-a21d-f122e694e3b3',
      name: 'Ricardo Ovando Fernández',
      position: 'Sr. Pharma Designer',
      hobbies:
        'Reposteria y pasteleria, coleccionar álbumes musicales ,cantar o bailar'
    },
    {
      id: 9,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team22.png?alt=media&token=a409108f-7a4a-41e0-90b8-f2c7f3ddbe07',
      name: 'Karen Victoria García Zúñiga',
      position: 'Sr. Audiovisual Specialist',
      hobbies: 'Videojuegos , leer, costura y tejido'
    },
    {
      id: 10,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team10.png?alt=media&token=2371074e-965f-43b0-9129-42bf061a3766',
      name: 'Enrique Alvarado Arenas',
      position: 'Sr. Audiovisual Specialist',
      hobbies: 'Videojuegos, hacer animaciones 3D, tocar la guitarra'
    },
    {
      id: 11,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team14.png?alt=media&token=c669c901-4dd2-49ec-936b-a8440f763a88',
      name: 'Diana Karen Jiménez Tapia',
      position: 'HR Head / Patient Specialist',
      hobbies: 'Documentales psicologicos, leer, cine'
    },
    {
      id: 12,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team6.png?alt=media&token=23a45f47-6a6e-43d7-b674-922de1928504',
      name: 'Karina Fonseca Ramírez',
      position: 'Design Manager',
      hobbies: 'Dibujar , jugar videojuegos , hacer ejercicio'
    },
    {
      id: 13,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team5.png?alt=media&token=c36759cb-2d46-4ae9-9769-b7ee46e70856',
      name: 'Carlos Armando Boyzo Oregón',
      position: 'Front End Programmer',
      hobbies: 'Jugar videojuegos, criptomonedas , tecnología'
    },
    {
      id: 14,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team1.png?alt=media&token=e3ad7729-f618-4501-bac4-4aae7132abd6',
      name: 'Jair Christopher Chavira Maldonado',
      position: 'Jr. MKT Coordinator',
      hobbies: 'Ver peliculas, conocer nuevos lugares, acampar'
    },
    {
      id: 15,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team3.png?alt=media&token=02d5875f-f9c5-4faf-92e9-ea9b985e8c93',
      name: 'Briseida Martínez Tapia',
      position: 'MSL',
      hobbies: 'Escuchar música, correr, leer acerca de arte o moda'
    },
    {
      id: 16,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team7.png?alt=media&token=738b6ab2-2db9-41e5-a120-3a07c009f285',
      name: 'Jennifer Sharon Rosenfeld Mecalco',
      position: 'MKT Coordinator',
      hobbies: 'Jugar futbol, hacer ejercicio, ver peliculas'
    },
    {
      id: 17,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team15.png?alt=media&token=2b4035bd-0880-4484-89f1-7db699b84b7a',
      name: 'Raúl Arturo Sánchez Trejo',
      position: 'Creative Manager',
      hobbies: 'Cocinar, jugar videojuegos , ilustrar en acuarelas'
    },
    {
      id: 18,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team4.png?alt=media&token=e62a72bf-02a3-429c-9954-cbc918f66841',
      name: 'Maria Cristina Villagómez Hoyos',
      position: 'Finance Head',
      hobbies:
        'Ver peliculas de miedo, pasar tiempo con sus hijos, actualizarse'
    },
    {
      id: 19,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team0.png?alt=media&token=1c2aaf9c-0d01-445b-96b3-7e2311fcc5fb',
      name: 'Angel Javier Bautista Garduño',
      position: 'Camera & Audio',
      hobbies: 'Fotografía,hacer documentales , jugar videojuegos'
    },
    {
      id: 20,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team13.png?alt=media&token=f45e0ba9-4164-4161-b595-8576e74f7867',
      name: 'Luis Arturo Fernández Alarcón',
      position: 'Streaming Director',
      hobbies: 'Juegos de mesa, videojuegos , pintura de miniaturas'
    },
    {
      id: 21,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team12.png?alt=media&token=3d9f9ad4-11b9-4817-9c3d-a2ae4ad36a41',
      name: 'Armando García Miranda',
      position: 'Switcher',
      hobbies: 'Escuchar música , ver peliculas , conocer nuevos lugares'
    },
    {
      id: 22,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team24.png?alt=media&token=927a39e7-7e1a-4024-a1f8-b4d29b251022',
      name: 'Diego Vazquez Vargas',
      position: 'Camera & Audio',
      hobbies: 'Tocar bateria , jugar videojuegos , salir de viaje'
    },
    {
      id: 23,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team16.png?alt=media&token=095b5716-a45e-4448-81c9-7825d984270c',
      name: 'Victor Hugo Cortes Hugalde',
      position: 'Legal Head',
      hobbies: 'Tocar el saxofon y las congas,escuchar música, leer'
    },

    {
      id: 24,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team19.png?alt=media&token=7a2aa663-fa07-4b30-9018-331e73ca24f5',
      name: 'Ricardo Perera Villafaña',
      position: 'SKIN DER Supply',
      hobbies: 'Jugar videojuegos,ir al gimnasio , andar en bici'
    },
    {
      id: 25,
      img: 'https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/team%2Fgp-team8.png?alt=media&token=569b95a4-7ed8-461f-9dac-67c53d852baa',
      name: 'Hugo Gerardo Rosales Hernández',
      position: 'Movility',
      hobbies: 'Ver peliculas, escuchar la radio'
    }
  ]
  return (
    <>
      <section data-aos='fade-up' className='Team section'>
        <div className='contenedor '>
          <div className='texto mt-3 mb-4 ' data-aos='fade-up'>
            <h3>
              GO PHARMA<sup>®</sup> TEAM
            </h3>
            <p className='h2'>
              Somos un equipo <span>INTERDISCIPLINARIO</span> formado en la
              industria <span>PHARMA</span> en áreas como:{' '}
              <span>
                MEDICAL, MKT, VENTAS, DIGITAL, BUSINESS INTELLIGENCE, ACCESO,
                PUBLIC AFFAIRS, PROGRAMAS de PACIENTES, FARMACOECONOMÍA y
                COMUNICACIÓN.
              </span>{' '}
              Contamos con experiencia en manejo de productos de diversas áreas
              terapéuticas:{' '}
              <span>
                ENFERMEDADES RARAS, NEUROLOGÍA, ONCOLOGÍA, REUMATOLOGÍA,
                DERMATOLOGÍA, DISPOSITIVOS MÉDICOS, PRIMARY CARE,
              </span>{' '}
              entre otras.
            </p>
          </div>
          <br />
          <div className='main mt-3  '>
            {data.map((user) => (
              <div className='profile-card ' key={user.id} data-aos='fade-up'>
                <div className='img'>
                  <img src={user.img} alt='go-pharma-team' />
                </div>

                <div className='caption mt-3 '>
                  <h3>{user.name}</h3>
                  <p>{user.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
