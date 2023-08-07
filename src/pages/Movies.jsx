import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import { useParams } from 'react-router-dom';

//  const Movies = () => {

// useEffect(() => {
//   async function renderMovies(event, filter) {
//     // event.preventDefault();
//     const searchInput = document.querySelector("#searchInput");
//     const query = searchInput.value;
//     const movies = await axios.get(
//       `https://www.omdbapi.com/?apikey=1f280777&s=${query}`
//         );
//         console.log(movies)
//   }
//   renderMovies();


// })
// function filterMovies(event) {
// renderMovies(event.target.value);
// }


const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const { query } = useParams();

  async function renderMovies(query) {

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=1f280777&s=${query}`
    );
    setMovies(response.data.Search);
  }

  // function filterMovies(event) {
  //   event.preventDefault()
  //   // const query = event.target.value;
  //   renderMovies(query);
  // }

  useEffect(() => {
    renderMovies('defaultQuery');
  }, []); 





  return (
    <div>
            <section id="movies">
      <div className="row">
        <div className="movies__container">
          <h2 className='animate__animated animate__backInLeft'>Results:</h2>
          <select
          defaultValue="Sort"
            className="filter__movies animate__animated animate__backInRight"
            id="filter"
            // onChange={}
          >
            <option value="">Sort</option>
            <option value="NEW_TO_OLD">New to Old</option>
            <option value="OLD_TO_NEW">Old to New</option>
          </select>
        </div>
        <div className="movies movies__loading">
          <i className="fas fa-spinner movies__loading--spinner"></i>
        </div>
    </div>
    
</section>
    </div>
  )
}

export default Movies;
