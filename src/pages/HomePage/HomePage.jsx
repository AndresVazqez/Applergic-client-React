import React, { useEffect, useState, useContext } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  const dropMenu = () => {
    const drop$$ = document.querySelector(".navbar");
    drop$$.classList.toggle("dropmenu");
  };

  if (loading) {
    return (
      <div className="isloading">
        {" "}
        <img 
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1645563034/35771931234507.564a1d2403b3a_bzc9bz.gif"
          alt="isloading gif"
        ></img>
      </div>
    );
  }

  return (
    <div className="homepage">
      <div className="homepage__header">
        <Dropdown />

        <img
          className="homepage__header--burger"
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644328277/CBFCD905-C712-401A-8FF1-7B5C8274A64A_bfmfk3.png"
          alt="burgerMenu"
          onClick={dropMenu}
        />
        <img
          className="homepage__header--info"
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/gris_3x_va6ggw.png"
          alt="info"
        />
      </div>

      <div className="homepage__logo">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/logoApplergicFinal_3x_aod5sh.png"
          alt="Logo"
        />
      </div>

      <div className="homepage__main">
        <div className="homepage__main--btn">
          <Link to="/scanner">
            <button className="homepage__main--btn-scan">
              <img
                src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/barcode2_3x_kjy5xg.png"
                alt="barcode"
              />
              Escanear
            </button>
          </Link>

          <p>Escane un nuevo producto. </p>
        </div>

        <div className="homepage__main--btn">
          <Link to="/search">
          <button className="homepage__main--btn-serch">
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/buscar_3x_ajq3ej.png"
              alt="search"
            />
            Buscar
            
          </button>
          </Link>
          <p>Busca un comercio o un restaurante para ti.</p>
              
        </div>
        <div className="homepage__main--btn">
          <button className="homepage__main--btn-sos">
          
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/sos1_3x_e9lomw.png"
              alt="sos"
            />
            <a href="tel:+34112">
            S.O.S.
            </a>
          </button>
          <p>¿Necesitas ayuda urgente? contactamos con emergencias</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
