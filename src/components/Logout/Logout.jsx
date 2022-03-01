import React, { useContext, useEffect } from "react";
import { JwtContext } from "../../shared/JwtContext/JwtContext";
import { useNavigate, Link, Navigate } from "react-router-dom";
function Logout() {
  const { Jwt, setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  Jwt && sessionStorage.removeItem("token");

  useEffect(() => {
    setTimeout(() => {
      setJwt(false);

      sessionStorage.clear();
      !Jwt && navigate("/login");
    }, 1000);
  }, []);

  return (
    <div className="isloading">
      <img
        src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1645563034/35771931234507.564a1d2403b3a_bzc9bz.gif"
        alt="isloading gif"
      ></img>
    </div>
  );
}

export default Logout;
