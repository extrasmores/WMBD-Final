import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { query } = useParams();
  const [loading, setLoading] = useState(false);

  async function renderMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=1f280777&s=${query}`
    );
    const res = data.Search;
    setMovies(res);
    setLoading(false);
  }

  // function filterMovies(event) {
  //   event.preventDefault()
  //   // const query = event.target.value;
  //   renderMovies(query);
  // }

  useEffect(() => {
    renderMovies();
  }, []);

  
  return (
    <div>
      <Nav  query={query} setQuery={setQuery} />
      <section id="movies">
        <div className="row">
          <div className="movies__results">

            <h2 className="animate__animated animate__backInLeft">Results:</h2>
            <select
              defaultValue="Sort"
              className="filter__movies animate__animated animate__backInRight"
              id="filter"
              >
              <option value="">Sort</option>
              <option value="NEW_TO_OLD">New to Old</option>
              <option value="OLD_TO_NEW">Old to New</option>
            </select>
              </div>
          <div className="movies__container">
          <div className="movies movies__loading">
            <i className="fas fa-spinner movies__loading--spinner"></i>
          </div>
          {loading
            ? new Array().fill(0).map((_, index) => <div key={index}>Loading...</div>)
            : movies.map((movie, index) => (
              <Movie
              key={movie.imdbID}
              Poster={movie.Poster}
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imbdID}
              />
              ))}
              </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
