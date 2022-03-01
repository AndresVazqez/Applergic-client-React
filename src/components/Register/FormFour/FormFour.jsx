import React, { useEffect, useContext } from "react";
import "./FormFour.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../../shared/service/api";
import { JwtContext } from "../../../shared/JwtContext/JwtContext";
function FormFour({ props }) {
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const login = () => {
    API.post("login", {
      email: props.email,
      password: props.password,
    })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.userDB.name));
        sessionStorage.setItem("id", JSON.stringify(res.data.userDB._id));
        sessionStorage.setItem("email", JSON.stringify(res.data.userDB.email));
        sessionStorage.setItem("allergens", JSON.stringify(res.data.userDB.allergens));
        sessionStorage.setItem("userComplete", JSON.stringify(res.data));
        

        navigate("/scanner");
        setJwt(true);
      })
      .catch((err) => {
        navigate("/login");
      });
  };

  return (
    <div className="c-formfour">
      <div className="c-formfour__title">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644431764/ok_wpyxsr.png"
          alt="its ok"
        />
        <h4>Hemos terminado, ya puedes escanear tu primer producto.</h4>
      </div>

      <div className="c-formfour__btn">
        <button className="button" type="submit" onClick={login}>
          Escanea un producto
        </button>
      </div>
    </div>
  );
}

export default FormFour;
