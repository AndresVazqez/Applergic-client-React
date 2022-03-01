import React, { useState } from "react";
import { Link } from "react-router-dom";
import './RegisterPage.scss';
import FormOne from "../../components/Register/FormOne/FormOne";
import FormTwo from "../../components/Register/FormTwo/FormTwo";
import FormThree from "../../components/Register/FormThree/FormThree";
import FormFour from "../../components/Register/FormFour/FormFour";
function RegisterPage() {
  const [register, setRegister] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [confirmation, setConfirmation] = useState(false);
  //funcion a ejecutar en el hijo
  const addData = (data) => {
    //const newRegister = ({...register, data});
    setRegister(data);
    setPagination(confirmation === false ? pagination + 1 : 4);
  };


 

  return (
    <div className="registerpage">
      <div className="registerpage__header">
        <div className="registerpage__header--back">
          <Link to={"/login"}>
            {""}
            <img alt="" src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644332335/volver_3x_nszfrh.png" /> {''}
            <p>volver</p>
          </Link>
        </div>
        <p>{pagination} de 4</p>
      </div>
      <div className="registerpage__pagination">
        {pagination === 1 && <FormOne props={addData} props2={register} />}
        {pagination === 2 && <FormTwo props={addData} props2={register} />}
        {pagination === 3 && <FormThree props={addData} props2={register}/>}
        {pagination === 4 && <FormFour props={register}/>}
      </div>

    </div>
  );
}

export default RegisterPage;
