import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./FormTwo.scss";
function FormTwo({ props, props2 }) {
  const { register, handleSubmit } = useForm();

  const onClickForm = (formData) => {
    props({
      ...props2,
      emergyContact: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company
      },
    });
  };

  return (
    <div className="c-formtwo">

      <div className="c-formtwo__title">
        <h3>Vamos a añadir tu contacto en caso de emergencia</h3>
        <p>
          Nos pondremos en contacto con tu persona de confianza y/o compañia de
          seguros en caso de emergencia.
        </p>
      </div>

      <div className="c-formtwo__form">
        <form  onSubmit={handleSubmit(onClickForm)}>
          <input className="c-formtwo__form--name"
            type="text"
            placeholder="Nombre completo"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Dirección e.mail"
            {...register("email")}
          />
          <input type="number" placeholder="Móvil" {...register("phone")} />
          <input
            type="text"
            placeholder="Compañia de seguros / Nº Poliza"
            {...register("company")}
          />
          <button className="button" type="submit">Guardar emergencias</button>
        </form>
        <Link to="/home">Registraré mi contacto en otro momento</Link>
      </div>

    </div>
  );
}

export default FormTwo;
