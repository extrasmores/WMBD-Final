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
         <figure className="movie__img--wrapper ">
       <img
         className="movie__img animate__animated animate__bounceInUp"
         src={Poster}
         alt=""
         />
        </figure>
        </Link>
        <div className="movie__title animate__animated animate__bounceInUp">{Title}</div>
       <div className="movie__year animate__animated animate__bounceInUp">{Year} 
         </div>           
     </div>
         )
     
    }

export default Movie;
