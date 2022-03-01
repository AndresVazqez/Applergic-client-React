import React, { useState } from "react";
import { appendErrors, useForm } from "react-hook-form";
import "./FormOne.scss";
function FormOne({ props, props2 }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [img, setImg] = useState(" ");
  const [isUploaded, setIsUploaded] = useState(false);

  

  const handleImageChange = (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImg(e.target.result);
        setIsUploaded(true);
        {

        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  
  };


  const onClickForm = (formData) => {
    // if (!formData.image.length) {
    //   formData.image = "";
    // }
    props({
      ...props2,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      image: formData.image,
    });
  };

  return (
    <div className="c-formone">
      <div className="c-formone__title">
        <h3>Dinos quien eres.</h3>
      </div>

      <form className="c-formone__form" onSubmit={handleSubmit(onClickForm)}>
        <div className="c-formone__form--circle">
          {!isUploaded ? (
            <>
              <label htmlFor="upload-photo">
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644339967/D67E0CB8-AB0E-4A07-89FB-8FFEA5597A92_rxmbuy.png"
                  alt="user img"
                />
                <p>subir foto</p>
              </label>

              <input
                type="file"
                name="upload-photo"
                id="upload-photo"                  
                accept=".jpg, .jpeg, .gif, .png" 
                //encType="multipart/form-data" 

                onChange={handleImageChange}
                //{...register("image")}
              />
              {/* <input
                  type="file"
                  name="upload-photo"                  
                  accept=".jpg, .jpeg, .gif, .png"

                  onChange={handleImageChange}

                  {...register("image")}
                /> */}
            </>
          ) : (
            <>
            <label htmlFor="upload-photo">
              <img className="uploaded-photo" src={img} id="uploaded-photo" alt="uploaded-photo" />             
            </label>
            <input
            type="file"
            name="upload-photo"
            id="upload-photo"                  
            accept=".jpg, .jpeg, .gif, .png"           
            onChange={handleImageChange}
          />
          </>
          )}
        </div>

        <div className="c-formone__form--info">
          <input
            type="text"
            placeholder="Nombre completo"
            {...register("name", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="email"
            placeholder="Dirección e.mail"
            {...register("email", {
              required: {
                value: true,
                message: "campo requerido",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="number"
            placeholder="Móvil"
            {...register("phone", {
              required: {
                value: true,
                message: "campo es requerido",
              },
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/,
                message: "El formato de número móvil no es válido",
              },
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "campo es requerido.",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                message:
                  "La contraseña debe contener min 8 y max 12 caracteres, incluyendo 1 Mayúscula, 1 caracter especial, y minúscula,",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button className="button" type="submit">
          Guardar perfil
        </button>
      </form>
    </div>
  );
}

export default FormOne;
