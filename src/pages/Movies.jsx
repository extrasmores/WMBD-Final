import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { query } = useParams();
  const [loading, setLoading] = useState(true);

  async function renderMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=1f280777&s=${query}`
    );
    const res = data.Search;
    setMovies(res);
    setLoading(false);
  }

  function filterMovies(filter) {
    if (filter) {
      const filteredMovies = [...movies].sort((a, b) => {
        if (filter === "OLD_TO_NEW") {
          return a.Year - b.Year;
        } else if (filter === "NEW_TO_OLD") {
          return b.Year - a.Year;
        }
        return 0;
      });
      setMovies(filteredMovies);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      renderMovies();
    }, 1000);
  }, []);

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (imdbID) => {
    setSelectedMovieId(imdbID);
  };

  function renderSkeleton(index) {
    return (
      <div className="movie" key={index}>
        <div className="movie__img--wrapper">
          <div className="movie__img--wrapper-skeleton animate__animated animate__bounceInUp"></div>
        </div>
        <div className="movie__img">
          <div className="movie__img--skeleton animate__animated animate__bounceInUp"></div>
        </div>
        <img src="" alt="" className="movie__img movie__img--skeleton animate__animated animate__bounceInUp" />
        <div className="movie__title">
          <div className="movie__title--skeleton animate__animated animate__bounceInUp"></div>
        </div>
        <div className="movie__year">
          <div className="movie__year--skeleton animate__animated animate__bounceInUp"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <section id="movies">
        <div className="row">
          <div className="movies__results">
            <Link to="/">
              <button className="back ">← Back</button>
            </Link>
            <h2 className="animate__animated animate__backInLeft">
              Results: {query}
            </h2>
            <select
              defaultValue="Sort"
              className="filter__movies animate__animated animate__backInRight"
              id="filter"
              onChange={(event) => filterMovies(event.target.value)}
            >
              <option value="">Sort</option>
              <option value="NEW_TO_OLD">New to Old</option>
              <option value="OLD_TO_NEW">Old to New</option>
            </select>
          </div>
          <div className="movies__container">
            <div className="movies movies__loading">
            </div>
            {loading
              ? new Array(8).fill(0).map((_, index) => renderSkeleton(index))
              : movies.map((movie, index) => (
                  <Movie
                    key={movie.imdbID}
                    Poster={movie.Poster}
                    Title={movie.Title}
                    Year={movie.Year}
                    imdbID={movie.imdbID}
                    onMovieClick={handleMovieClick}
                  />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
