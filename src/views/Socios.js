import React from "react";
import "../scss/index.scss";
import "aos/dist/aos.css"; // You can also use <link> for styles




function Socios() {
  const data = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FABBVIE-LOGO.png?alt=media&token=d9821bfe-b80f-4e5c-98f4-0f1b2937172f",
      name: "Abbie"
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FAga.png?alt=media&token=69c3a960-36e2-4db8-ad53-90c940b34a05",
      name: "Aga"
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FAllergan_logo_.png?alt=media&token=6fd18d14-8b52-43a4-b63e-25b9e63da478",
      name: "Allergan"
    },
    {
      id: 4,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fasofarma-seeklogo.com.png?alt=media&token=1f7520b7-b8b4-4e7d-88c7-809c40e25493",
      name: "Asofarma"
    },
    {
      id: 5,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fastra_zeneca_logo.png?alt=media&token=b1be33ad-dceb-4759-a5f8-4ac2a4bcb29d",
      name: "Aztra"
    },
    {
      id: 6,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLOGO_BAXTER.png?alt=media&token=3d75a734-9077-4e01-8f72-4109f6abd9af",
      name: "Baxter"
    },
    {
      id: 7,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Flogo_new_biomarin.png?alt=media&token=66548550-c227-4fac-8034-10688b2691e2",
      name: "Biomarin"
    },
    {
      id: 8,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2Fbio-products-laboratory-bpl.png?alt=media&token=2f33b60f-3b03-4b30-befd-84d471f7d7db",
      name: "Bpl"
    },
    {
      id: 9,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogo_Chiesi.png?alt=media&token=aa106f7d-17df-4ab7-9f94-57e3b8c44ddb",
      name: "Chiesi"
    },
    {
      id: 10,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogo_COINER.png?alt=media&token=1e6b9e20-0a1b-4d03-9ec8-ba72e41b6c3d",
      name: "Coiner"
    },
    {
      id: 11,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FEisai_logo.png?alt=media&token=ff3a711f-2eeb-4dac-9a62-3784637e0286",
      name: "Eisai"
    },
    {
      id: 12,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FGrupoVal.png?alt=media&token=031e305a-750b-42c7-8583-8c90967a15d6",
      name: "Grupo Val"
    },
    {
      id: 13,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogo-with-claim-blue.png?alt=media&token=28feaab9-2a2a-41d1-9661-a53ed2f08e49",
      name: "Igenomix"
    },
    {
      id: 14,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FNovartis.png?alt=media&token=15b974ec-5fe1-4e1a-b842-3b228db575fc",
      name: "Novartis"
    },
    {
      id: 15,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FOmer.png?alt=media&token=ccbed7f3-b183-4d90-b209-74d3a08d12c3",
      name: "Omer"
    },
    {
      id: 16,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FROCHE_LOGO.png?alt=media&token=931d2ec8-1d7b-4ca7-a454-ce75d74de904",
      name: "Roche"
    },
    {
      id: 17,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogotipo-SEER_AZUL_GO_PHARMA.png?alt=media&token=e924a284-e43b-411a-abbc-76b1476e34d9",
      name: "Seer"
    },
    {
      id: 18,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FSKINDER_LOGOR.png?alt=media&token=2162dc1c-4c61-4ef4-906a-7762cef4e7fa",
      name: "Skinder"
    },
    {
      id: 19,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogoSparks.png?alt=media&token=0d3648a5-f310-4a9d-894d-ddb033894c62",
      name: "Sparks"
    },
    {
      id: 20,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FTakeda.png?alt=media&token=39f1dada-193d-4865-bf52-1ecbf50f36ef",
      name: "Takeda"
    },
    {
      id: 21,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FLogoTeva_RGB.png?alt=media&token=ba247ea3-69c2-4582-90f6-d24923845bf2",
      name: "Teva"
    },
    {
      id: 22,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FUltraMedic.png?alt=media&token=0142c9a0-e53d-42cc-9469-990291ba046f",
      name: "Ultra Medic"
    },
    {
      id: 23,
      img: "https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/partners%2FultragenyxPH-.png?alt=media&token=247be36e-c771-444e-a31b-3aaa67c78eed",
      name: "Ultragenyx"
    }];
  return (
    <>

      <section data-aos="fade-up" data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" className="section sociost">

        <div className="contenedor">
          <h4 data-aos="fade-up"> Socios Comerciales</h4>
          <div data-aos="fade-up" className="contenedor-socios">

            {data.map((user) => (
              <div data-aos="fade-up" key={user.id} className="socio">
                <img src={user.img} alt="socio-gopharma" />
              </div>
            ))}


          </div>
        </div>
      </section>


    </>
  );
}

export default Socios;
