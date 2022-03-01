import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ScannerResult.scss";
import axios from "axios";

function ScannerResult({ props, props2 }) {
  const [error, setError] = useState();
  const [isFavorite,setisFavorite] = useState(false);
  const addFavorite = () => {
    axios
      .patch("https://applergic-server.vercel.app/api/users/" + props._id, {
        allergens: [...props.allergens],
        fav:
          props2 === ""
            ? [...props.fav]
            : !props.fav.includes(props2[0]._id)
            ? [...props.fav, props2[0]._id]
            : [...props.fav],
        diary: [...props.diaryList],
      })
      .then((res) => {})
      .catch((err) => {});
      setisFavorite(true);
  };

  let coincidence;
  let text;

  if (props2.length) {
    const productArray = props2[0].allergens;

    const userArray = props.allergens;
    const allArray = [];

    const verify = () => {
      for (const item of productArray) {
        if (!allArray.includes(item)) {
          allArray.push(item);
        }
      }
      for (const item of userArray) {
        if (!allArray.includes(item)) {
          allArray.push(item);
        }
      }
    };

    verify();
    coincidence =
      allArray.length !== productArray.length + userArray.length ? true : false;
  } else {
    text = "No hay datos para mostrar";
  }

  return (
    <div className="c-scannerresult">
      <div className="c-scannerresult__header">
        <div className="c-scannerresult__header--back">
          <Link to={"/home"}>
            {""}
            <img
              alt=""
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644332335/volver_3x_nszfrh.png"
            />{" "}
            {""}
            <p>volver</p>
          </Link>
        </div>
      </div>

      <div className="c-scannerresult__title">
        <h1>Aqui tienes el resultado</h1>
      </div>
      <div className="c-scannerresult__text">
        {coincidence ? (
          <p>
            Este producto <span>NO</span> es apto para tí
          </p>
        ) : text ? (
          <p>
            Lo sentimos, no hay datos suficientes para poder valorar este
            producto
          </p>
        ) : (
          <p>Este producto es apto para ti</p>
        )}
      </div>
      <div className="c-scannerresult__imgcontainer">
        <div className="c-scannerresult__imgcontainer--border">
          {coincidence ? (
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644522246/border-rojo_prrt2l.png" />
          ) : text ? (
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644522246/border-amarillo_lctbno.png" />
          ) : (
            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644522246/border-verde_lruwuu.png" />
          )}
        </div>
        <div className="c-scannerresult__imgcontainer--product">
          {props2 && (
            <img className="Absolute" src={props2[0].image} alt=""></img>
          )}
        </div>

        <div className="c-scannerresult__imgcontainer--icons">
          {isFavorite ? (
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1645568598/favorito_3x_uuzvff_htikuq.png"
              alt="favorite"
              onClick={addFavorite}
            ></img>
          ) : (
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/favorito_3x_uuzvff.png"
              alt="favorite"
              onClick={addFavorite}
            ></img>
          )}

          <Link to="/diary">
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/diario_3x_nsw6xi.png"
              alt="diary"
            ></img>
          </Link>
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/red_3x_ivwedb.png"
            alt="shared"
          ></img>
        </div>
      </div>
      <div className="c-scannerresult__info">
        {props2 && <h3>{props2[0].name}</h3>}
        {props2 && <h4>{props2[0].brand}</h4>}
        {props2 && (
          <p>
            <strong>Ingredientes:</strong> {props2[0].ingredients}
          </p>
        )}
      </div>
      <div className="c-scannerresult__btn">
        <button onClick={() => document.location.reload()}>
          Escanea otro producto
        </button>
      </div>
    </div>
  );
}

export default ScannerResult;
