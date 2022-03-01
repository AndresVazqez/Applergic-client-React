import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoAnimation from "../../components/LogoAnimation/Logoanimation"

import "./OnboardingPage.scss";
const logo =
  "https://res.cloudinary.com/dkv0drgbb/image/upload/v1644310001/logo_3x_ljukvu.png";
const onboardingArray = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dkv0drgbb/image/upload/v1644309285/scan2_3x_ybdlkq.png",

    text: "¡Bienvenido a Applergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dkv0drgbb/image/upload/v1644309324/rectangle_3x_vepzp9.png",

    text: "Lleva tu Diario de compras y actividades.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dkv0drgbb/image/upload/v1644309352/ambulancia_3x_fpxeme.png",

    text: "En caso de emergencia nos pondremos en contacto con la persona que nos digas.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dkv0drgbb/image/upload/v1644309385/traduccioN_3x_jrntxh.png",

    text: "Viaja a donde quieras. Tendrás a tu disposición un traductor off-line y tu informe de alergias e intolerancias traducido al idioma local",
  },
];

function OnboardingPage() {
  const [splash, setSplash] = useState(true);
  const [slide, setSlide] = useState(0);
  

  return (
    <>
      {splash && (
        <div  onClick={() => setSplash(false)}className="c-onboardingPage">
          <div className="c-onboardingPage__title">
            <h1>Applergic</h1>
            <h4>Mi guía alimentaria</h4>
          </div>
          <div className="c-onboardingPage__logo">
            <img className="rotate"
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644261304/logoApplergic_laexqz.png"
              alt="logo Applergic"
            />
          </div>
         
        </div>
      )}
      {!splash && (
        <>
          <div className="c-onboarding">

            <div className="c-onboarding__logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="c-onboarding__main">
              <img src={onboardingArray[slide].image} alt="imagenes slide" />
              <p>{onboardingArray[slide].text}</p>
            </div>
            <div className="c-onboarding__slide">
              {slide === 0 && <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644311742/1-dot_ufasds.png" alt="" />}
              {slide === 1 && <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644311742/4-dot_uqddh9.png" alt="" />}
              {slide === 2 && <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644311742/3-dot_lxaklk.png" alt="" />}
              {slide === 3 && <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644311742/2-dot_ty1lwi.png" alt="" />}
            </div>


          </div>

          <div className="c-onboarding__btn">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p>saltar</p>
            </Link>
            {slide < 3 ? (
              <button onClick={() => setSlide(slide + 1)}><p>siguiente</p> <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644360545/next_rfplfj.png" alt="arrow next" /> </button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p>terminar</p>
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default OnboardingPage;
