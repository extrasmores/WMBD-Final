import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';




// const moviesWrapper = document.querySelector(".movies");

// moviesWrapper.classList += " movies__loading";
// moviesWrapper.classList.remove("movies__loading");


//   moviesWrapper.classList.add("movies__loading");
//   await timeout(1000);

//   const moviesData = await movies.json();
//   const moviesArray = moviesData.Search;

//   if (filter === "NEW_TO_OLD") {
//     moviesArray.sort((a, b) => b.Year - a.Year);
//   } else if (filter === "OLD_TO_NEW") {
//     moviesArray.sort((a, b) => a.Year - b.Year);
//   }

//     moviesWrapper.innerHTML = moviesArray
//       .map((movie) => getMovieHTML(movie))
//       .join("");
//     moviesWrapper.classList.remove("movies__loading");
// }

// function filterMovies(event) {
//   renderMovies(event.target.value);
// }


// function timeout(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function getMovieHTML(movie) {
//   return `<div class="movie">
//          <figure class="movie__img--wrapper">
//        <img
//          class="movie__img"
//          src="${movie.Poster}"
//          alt=""
//        />
//         </figure>
//         <div class="movie__title">${movie.Title}</div>
//        <div class="movie__year"> ${movie.Year}
//          </div>           
//      </div>`;
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
