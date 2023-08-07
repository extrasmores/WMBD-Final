import React from 'react'

 const Movie = () => {

 
  return (

      <div class="movie">
         <figure class="movie__img--wrapper">
       <img
         class="movie__img"
         src="${movie.Poster}"
         alt=""
         />
        </figure>
        <div class="movie__title">$</div>
       <div class="movie__year"> $
         </div>           
     </div>
         )
     
    }

export default Movie;
