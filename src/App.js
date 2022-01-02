import Particles from "react-tsparticles";
import logo from './img/logo-responsive.svg';
import Slogan from './img/we-go-beyond.svg';
import './scss/index.scss';

function App() {
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <section className="background-a">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{

            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 70,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 0,
                  duration: 0.4,
                },
              },
            },
            particles: {
              groups: {
                z5000: {
                  number: {
                    value: 70,
                  },
                  zIndex: {
                    value: 5000,
                  },
                },
                z7500: {
                  number: {
                    value: 30,
                  },
                  zIndex: {
                    value: 7500,
                  },
                },
                z2500: {
                  number: {
                    value: 50,
                  },
                  zIndex: {
                    value: 2500,
                  },
                },
                z1000: {
                  number: {
                    value: 40,
                  },
                  zIndex: {
                    value: 1000,
                  },
                },
              },

              color: {
                value: "#ffffff",
              },
              links: {
                enable: false,
              },
              collisions: {
                enable: false,
              },
              move: {
                angle: {
                  value: 10,
                  offset: 10,
                },
                enable: true,
                speed: 0.3,
                direction: "left",
                random: true,
                straight: true,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 21000,
                },
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 0.3,
              },

            },
            detectRetina: true,
          }}
        />
      </section>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo go-pharma" />
        <img src={Slogan} className="slogan-img" alt="we go beyons the horizon" />


      </header>
      <section className="section">
        <div className="contenedor">
          <h1>Go-Pharma</h1>
          <h2>Somos una agencia de CONSULTORÍA, MKT & MEDIA especializada en el mercado PHARMA y el sector SALUD. Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a RESULTADOS.</h2>
        </div>
      </section>

    </div>
  );
}

export default App;
