import React, { useState } from 'react'
import { Link } from 'react-router-dom';


 const Movie = ({ Poster, Title, Year, imdbID, onMovieClick }) => {

    
    // const [movie, setMovie] = useState({
    //     Poster:"",
    //     Title:"",
    //     Year:"",
    //     imdbID:"",
    // })

 
  return (

      <div className="movie" onClick={() => onMovieClick(imdbID)}>
        <Link to={`/movies/${imdbID}`}>
         <figure className="movie__img--wrapper">
       <img
         className="movie__img"
         src={Poster}
         alt=""
         />
        </figure>
        </Link>
        <div className="movie__title">{Title}</div>
       <div className="movie__year">{Year} 
         </div>           
     </div>
         )
     
    }

export default Movie;
