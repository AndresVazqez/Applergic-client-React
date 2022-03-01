import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ScannerResult from "../ScannerResult/ScannerResult";

function Prueba({ props }) {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState();
  const [isFetched, setIsFetched] = useState(false);
  const [isFetched2, setIsFetched2] = useState(false);
  const data = props;
  const haveAllergy = [];

 

  
  const getProduct = async () => {
    const res = await axios(`https://applergic-server.vercel.app/api/products/${data}`, {
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${sessionStorage.getItem("token")}`;
          },
        },
      },
    });
    if (res.data.length === 0) {
      setProduct("");
    } else {
      setProduct(res.data);
    }

    setIsFetched2(true);
  };

  const getUserById = async () => {
    const idStorage = JSON.parse(sessionStorage.getItem("id"));
    const res = await axios(`https://applergic-server.vercel.app/api/users/${idStorage}`, {
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${sessionStorage.getItem("token")}`;
          },
        },
      },
    });

    setUser(res.data.userDB);
    setIsFetched(true);
  };

  useEffect(() => {
    getUserById();
    getProduct();
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "code",
      sessionStorage.getItem("code") === null ? props :
        sessionStorage.getItem("code") + "," + props,
      props
    );
  }, [props]);

  return (
    <>
      {isFetched && isFetched2 && (
        <ScannerResult props={user} props2={product} props3={isFetched} />
      )}
    </>
  );
}

export default Prueba;
