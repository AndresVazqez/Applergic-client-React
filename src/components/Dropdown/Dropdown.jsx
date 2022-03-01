import React, {useContext} from "react";
import "./Dropdown.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/JwtContext/JwtContext";


function Dropdown() {
  
  const navigate = useNavigate();
  const dropMenu = () => {
    const drop$$ = document.querySelector(".navbar");
    drop$$.classList.toggle("dropmenu")
  }

  const logout = () => {
    navigate("/login");
  }

  return (
    <nav className="navbar">

      <div className="navbar__close" onClick={dropMenu}>
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png" alt="exit" />
      </div>

      <div className="navbar__menu" >        
        <div className="navbar__menu--btn">
          <NavLink  to="/profile">
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644356951/Perfil2_tx3ecf.png" alt="profile" />
            <p>Perfil</p>
          </NavLink>
        </div>
        <div className="navbar__menu--btn">
          <NavLink  to="/favorites">
            <img  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644356960/Favorite2_ujvzxi.png" alt="favorite" />
            <p>Favorito</p>
          </NavLink>
        </div>

        <div className="navbar__menu--btn">
          <NavLink  to="/diary">
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644354132/diary_etjsf9.png" alt="diary" />
            <p>Diario</p>
          </NavLink>
        </div>

        <div className="navbar__menu--btn">
          <NavLink  to={"/shared"}>
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644354132/Shared_gtxrwx.png" alt="" />
            <p>Compartir</p>
          </NavLink>
        </div>

        <div className="navbar__menu--btn">
          <NavLink  to={"/translate"}>
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644354132/Lang_sxuim7.png" alt="" />
            <p>Traductor</p>
          </NavLink>
        </div>

        <div className="navbar__menu--btn">
          <NavLink  to={"/terms"}>
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644354132/Terms_ysbrrw.png" alt="" />
            <p>Términos</p>
          </NavLink>
        </div>

        <div className="navbar__menu--btn">
          <NavLink  to={"/logout"} onClick={()=>logout}> 
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644354132/Exit_gdef1g.png" alt="" />
            <p>Salir</p>
          </NavLink>
        </div>

      </div>

    </nav>
  );
}

export default Dropdown;
