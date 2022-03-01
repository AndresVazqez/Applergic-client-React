import React from 'react'
import Search from "../../components/Search/Search"
import Buscar from "../../components/Search/Busqueda"
import Footer from "../../components/Footer/Footer"
const SearchPage = () => {
  return (
    <div>
        <Search details ={Buscar}/>
        <Footer/>
    </div>
  )
}

export default SearchPage