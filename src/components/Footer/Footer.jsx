import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <NavLink to="/home">
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/homeAzul_3x_jrxgex.png"
            alt=""
          ></img>
        </NavLink>
        <NavLink to="/favorites">
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/favorito_3x_uuzvff.png"
            alt=""
          ></img>
        </NavLink>
        <NavLink to="/diary">
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/diario_3x_nsw6xi.png"
            alt=""
          ></img>
        </NavLink>
        <NavLink to={"/shared"}>
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/red_3x_ivwedb.png"
            alt=""
          ></img>
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
