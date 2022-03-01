import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const [Jwt, setJwt] = useState(sessionStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    
    setTimeout(() => {
      Jwt && navigate("/home");
      !Jwt && navigate("/login")
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

export default NotFound;
