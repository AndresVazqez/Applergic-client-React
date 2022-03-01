import React, { useEffect, useState, useContext } from "react";
import "./ScannerPage.scss";
import axios from "axios";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Prueba from "../../components/Prueba/Prueba";
import ScannerResult from "../../components/ScannerResult/ScannerResult";
import { Link } from "react-router-dom";
import { DiaryListContext } from "../../shared/DiaryListContext/DiaryListContext";
function ScannerPage() {
  const [data, setData] = React.useState("Not found");
  const [text, setText] = React.useState("codigo de barras");
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState(true);
 
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="isloading">
        {" "}
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1645563034/35771931234507.564a1d2403b3a_bzc9bz.gif"
          alt="loading img"
        ></img>
      </div>
    );
  }

  return (
    <>
      {data === "Not found" ? (
        <div className="c-scannerPage">
          <div className="c-scannerPage__title">
            <div className="c-scannerPage__title--close">
              <Link to="/home">
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
                  alt="exit"
                />
              </Link>
            </div>
            <div className="c-scannerPage__title--text">
              <h1>Escaneando...</h1>
              <p>
                Tan solo tienes que centrar el <span>{select ? "código de barras" : "código QR" }</span> el producto
                requerido.
              </p>
            </div>
          </div>

          <div className="c-scannerPage__scanner">
            <div className="c-scannerPage__scanner--cam">
              <BarcodeScannerComponent
                width={300}
                height={200}
                onUpdate={(err, result) => {
                  if (result) setData(result.text);
                  //else setData("Not Found");
                }}
              />
            </div>

            <div className="c-scannerPage__scanner--btn">
              <div
                onClick={() => setSelect(!select)}
                className="c-scannerPage__scanner--btn--item"
              >
                {select == true ? (
                  <img
                    src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644598851/oval_3x_xqzxrf.png"
                    alt="barCode icon"
                  />
                ) : (
                  <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644598840/barcode-negro_fbgvkc.png" />
                )}
                <p>Codigo de barras</p>
              </div>

              <div
                onClick={() => setSelect(!select)}
                className="c-scannerPage__scanner--btn--item"
              >
                {select == false ? (
                  <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644598841/qr-azul_nevak1.png" />
                ) : (
                  <img
                    src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644598844/ovalCopy_3x_rosdoc.png"
                    alt="qrCode icon"
                  />
                )}
                <p>Codigo QR</p>
              </div>

              <div className="c-scannerPage__scanner--btn--item">
                <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644489507/nfc_yn7rro.png" />
                <p>NFC</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Prueba props={data} />
      )}
    </>
  );
}

export default ScannerPage;
