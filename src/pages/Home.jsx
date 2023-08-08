import React, { useState } from "react";
import movieImage from "../assets/undraw_horror_movie_3988.svg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MovieImage from "../components/MovieImage";
import Movies from "./Movies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();
  function searchDataBase() {
    navigate(`/movies/search/${query}`)
  }
const [query, setQuery] = useState("");
  return (
    <section id="home">
      <Nav query={query} setQuery={setQuery} />
      <div className="content__wrapper">
        <h1 className="title animate__animated animate__zoomIn">Browse our Movies</h1>
        <form className="input__wrapper animate__animated animate__backInLeft"
       >
          <input
            id="searchInput"
            type="text"
            
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Title or Year"
            value={query}
          />
          <button className="content__search--button"
           onClick={() => searchDataBase()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
     
    <MovieImage />
    </section>
  );
};

export default Home;
