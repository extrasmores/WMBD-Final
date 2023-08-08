import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";

const MovieInfo = ({ Poster, Title, Year }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { imdbID } = useParams();

  async function fetchMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=1f280777&i=${imdbID}`
    );
    setMovieInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  useEffect(() => {}, [movieInfo]);

  return (
    <div>
      <Nav />
      
      <section id="movie">
        <div className="row">
          <div className="movie__container">
            <div className="movie__container--img animate__animated animate__bounceInUp">
          <Link to="/">
              <button className="back ">← Back</button>
            </Link>

            {movieInfo && (
                <figure className="movie__img--wrapper">
                <img className="movie__img" src={movieInfo.Poster} alt="" />
              </figure>
            )}
            </div>
            <div className="movie__container--info">

            {movieInfo && <div className="movie__title animate__animated animate__bounceInUp">{movieInfo.Title}</div>}
            {movieInfo && <div className="movie__year animate__animated animate__bounceInUp">{movieInfo.Year}</div>}
            {movieInfo && <h3 className="movie__genre animate__animated animate__bounceInUp">{movieInfo.Genre}</h3>}
            <h3 className="summary animate__animated animate__bounceInUp">Summary</h3>
            {movieInfo && <p className="movie__plot animate__animated animate__bounceInUp">{movieInfo.Plot}</p>}
            {movieInfo && <h4 className="animate__animated animate__bounceInUp">Total Box Office: {movieInfo.BoxOffice}</h4>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieInfo;
