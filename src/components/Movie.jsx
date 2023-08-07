import React, { useState } from 'react'


 const Movie = ({ Poster, Title, Year, imbdID }) => {
    // const [movie, setMovie] = useState({
    //     Poster:"",
    //     Title:"",
    //     Year:"",
    //     imdbID:"",
    // })

 
  return (

      <div className="movie">
         <figure className="movie__img--wrapper">
       <img
         className="movie__img"
         src={Poster}
         alt=""
         />
        </figure>
        <div className="movie__title">{Title}</div>
       <div className="movie__year">{Year} 
         </div>           
     </div>
         )
     
    }

export default Movie;
