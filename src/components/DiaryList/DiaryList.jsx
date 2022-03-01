import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import "./DiaryList.scss";
import { Link } from "react-router-dom";


function DiaryList() {
  const [product, setProduct] = useState([]);
  const [verify, setVerify] = useState([]);
  const [allergens, setAllergens] = useState();
  const [codes, setCodes] = useState([]);
  const [change, setChange] = useState(true);

  const deleteProduct = (e) => {
    e.preventDefault();

    const codeToDelete = e.target.name;

    if (codes.length) {
      const codesFiltred = codes.filter((code) => code !== codeToDelete);

      setCodes(codesFiltred);
      sessionStorage.setItem("code", "," + codesFiltred);
    }
    setChange(!change);
  };

  useEffect(() => {
    if (sessionStorage.getItem("code")) {
      const diaryFinal = [];
      const diaryListArray = sessionStorage.getItem("code").split(",");

     

      diaryListArray.forEach((item) => {
        if (!diaryFinal.includes(item)) {
          diaryFinal.push(item);
        }
      });
      const diaryList = diaryFinal.filter((item) => item !== "");

      
      setCodes(diaryList);
   

      const allergensStorage = JSON.parse(sessionStorage.getItem("allergens"));

      setAllergens(allergensStorage);

      const getProducts = async () => {
        const res = await axios.get(
          `https://applergic-server.vercel.app/api/products`,
          {
            params: { codes: diaryList },
            paramsSerializer: (params) => {
              return qs.stringify(params, { arrayFormat: "repeat" });
            },
            headers: {
              Authorization: {
                toString() {
                  return `Bearer ${sessionStorage.getItem("token")}`;
                },
              },
            },
          }
        );
        setProduct(res.data.res);
      };

      getProducts();
    }
  }, [change]);
  
  return (
    <div className="c-diaryList">
      <div className="c-diaryList__icons">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644775869/calendar_ughjqz.png"
          alt="calanedar icon"
        />
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644775899/filter_sfjtul.png"
          alt="filter "
        />
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
            alt="close"
          />
        </Link>
      </div>
      <div className="c-diaryList__title">
        <h3>Historial diario</h3>
        <p>Aquí tienes tus búsquedas más recientes.</p>
      </div>
      {product.map((item) =>
        item.allergens.slice(0, 1).map((item2) =>
          allergens.includes(item2) ? (
            <div className="c-diaryList__products pink" key={item._id}>
              <div className="c-diaryList__products--img">
                <img
                  className="c-diaryList__products--img--frame"
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1645302750/DiaryListPink_pitwxf.png"
                  alt="frame pink"
                />
                <img
                  className="c-diaryList__products--img--product"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="c-diaryList__products--text">
                <p>{item.name}. No apto para tu consumo</p>
              </div>
              <div className="c-diaryList__products--icon">
                <input
                  type="button"
                  value=""
                  name={item.code}
                  onClick={deleteProduct}
                />
              </div>
            </div>
          ) : (
            <div className="c-diaryList__products green" key={item._id}>
              <div className="c-diaryList__products--img">
                <img
                  className="c-diaryList__products--img--frame"
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1645302750/DiaryListGreen_drtowj.png"
                  alt="frame green"
                />
                <img
                  className="c-diaryList__products--img--product"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="c-diaryList__products--text">
                <p>{item.name}. Apto para tu consumo</p>
              </div>
              <div className="c-diaryList__products--icon">
                <input
                  type="button"
                  value=""
                  name={item.code}
                  onClick={deleteProduct}
                />
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default DiaryList;
