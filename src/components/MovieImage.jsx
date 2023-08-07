import React from 'react'
import movieImage from '../assets/undraw_horror_movie_3988.svg'

const MovieImage = () => {
  return (
    <div className="home__movie__img--wrapper">
    <img src={movieImage} alt="" className="home__movie--img animate__animated animate__fadeInRight" />
  </div>
  )
  }

  export default MovieImage;