import React from 'react'
import logo from '../assets/popcorn-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import { useNavigate } from 'react-router-dom';


 const Nav = ({ filterMovies, query, setQuery }) => {
  let navigate = useNavigate();

  function searchDataBase() {
    navigate(`/movies/search/${query}`)
  }
  return (
<section id="nav__background">
      <nav>
        <img className="logo" src={logo} alt="" />
        <ul className="nav__links animate__animated animate__backInLeft">
          <li><a href="#" className="nav__link link__hover-effect">Home</a></li>
          <li>
            <a href="#" className="nav__link link__hover-effect ">Find your movie</a>
          </li>
          <li><a href="#" className="nav__link">CONTACT</a></li>
        </ul>
      </nav>
      <div className="content__wrapper">
        <h1 className="title animate__animated animate__zoomIn">Browse our Movies</h1>
        <form className="input__wrapper animate__animated animate__backInLeft"
       >
          <input
            id="searchInput"
            type="text"
            
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Title or Year"
            value={query}
          />
          <button className="content__search--button"
           onClick={() => searchDataBase()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Nav;
