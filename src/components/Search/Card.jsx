import React from 'react';
import "./Card.scss";


function Card({restaurant}) {
  return(
    <div className="card">
      <div className="card__img">
        <img alt={restaurant.name} src={process.env.PUBLIC_URL + restaurant.imgPath} />
      </div>
      <div className="card__info">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.email}</p>
      </div>
    </div>
  );
}

export default Card;