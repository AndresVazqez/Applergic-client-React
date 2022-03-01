import { React, useEffect, useState } from "react";
import "./Rated.scss";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyComponent() {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  
  const postRating = () => {
    axios
      .post("https://applergic-server.vercel.app/api/ratings/vote", {
        rating: rating,
      }, {
        headers: {
          'Authorization': {
            toString () {
                return `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        }
      })
      .then(function (response) {
        
      })
      .catch(function (error) {
        
      });
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    postRating();
  }, [rating]);

  

  if (loading) {
    return (
      <div className="isloading">
        {" "}
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644532203/loading_yhwlmu.gif"
          alt=""
        ></img>
      </div>
    );
  }

  return (
    <div className="c-rated">
      <div className="c-rated__header">
        <div className="c-rated__header--back">
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

      <div className="c-rated__hero">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644261304/logoApplergic_laexqz.png"
          alt=""
        />
        <h3>Â¡Gracias por usar Applergic!</h3>

        <h4>
          Por favor, <br></br> evalua tu experiencia.
        </h4>
      </div>
      <div className="c-rated__rating">
        <Rating onClick={handleRating} ratingValue={rating} />
      </div>
      <div className="c-rated__btn">
        <p>Enviar sugerencias</p>
      </div>
    </div>
  );
}
