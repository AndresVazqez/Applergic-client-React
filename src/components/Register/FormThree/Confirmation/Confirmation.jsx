import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Confirmation.scss";
function Confirmation({ props, props2, props3, props4 }) {
  const [allergens, setAllergens] = useState([]);
  const [error, setError] = useState();

  const onClickForm = () => {
    const finalData = [];
    props3.map((item, index) => finalData.push(item[1]));

    axios
      .post("https://applergic-server.vercel.app/api/users/register", {
        image: props2.image,
        name: props2.name,
        email: props2.email,
        phone: props2.phone,
        password: props2.password,
        emergyContact: {
          name: props2.emergyContact.name,
          phone: props2.emergyContact.phone,
          email: props2.emergyContact.email,
          insurance: {
            company: props2.emergyContact.company,
          },
        },
        allergens: finalData,
      })
      .then(function (response) {
        
        props({
          ...props2,
          allergens: finalData,
        });
      })
      .catch(function (error) {
        
        setError("Ha habido un error al registrarse intentalo nuevamente!");
      });
  };

  const handleBack = () => {
    props4();
  };


  return (
    <div className="c-confirmation">
      <div className="c-confirmation__main">
        <div onClick={handleBack} className="c-confirmation__main--close">
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
            alt="arrow close"
          />
        </div>
        <h2>Confirma tu selección.</h2>
        <p className="c-confirmation__main--parag1">
          A continuacion te resumimos los alimentos registrados como peligrosos
          para ti.
        </p>

        <div className="c-confirmation__main--parag2">
          <p className="c-confirmation__main--parag2--item">
            Marca para deseleccionar o añadir uno nuevo.
          </p>
        </div>

        <div className="c-confirmation__main--aller">
          {props3.map((item, index) => (
            <p key={item[1]}>{item[0]}</p>
          ))}
        </div>

        <div className="c-confirmation__main--btn">
          <p className="c-confirmation__main--btn--item" onClick={handleBack}>
            {" "}
            Añadir nuevos{" "}
          </p>
        </div>

        {error && <p>{error}</p>}
        <button className="button" onClick={onClickForm}>
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
