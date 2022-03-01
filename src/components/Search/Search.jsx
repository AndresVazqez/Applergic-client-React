import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import "./Search.scss"
import { Link } from "react-router-dom";



function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredRestaurant = details.filter(
    restaurant => {
      return (
        restaurant
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        restaurant
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredRestaurant={filteredRestaurant} />
      </Scroll>
    );
  }

  return (
    <section className="c-section">
      <div className="c-titleSearch">
      <div className="c-scannerresult__header--back">
          <Link to={"/home"}>
            {""}
            <img
              alt=""
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644332335/volver_3x_nszfrh.png"
            />{" "}
            {""}
            <p>volver</p>
          </Link>
          </div>
        <h2 className="c-titleSearch__title">Encuentra aquí tus restaurantes</h2>
      </div>
      <div className="c-imput">
        <input 
          type = "search" 
          placeholder = "Buscar aquí" 
           onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;