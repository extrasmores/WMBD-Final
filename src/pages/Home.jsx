import React, { useState } from "react";
import movieImage from "../assets/undraw_horror_movie_3988.svg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MovieImage from "../components/MovieImage";
import Movies from "./Movies";


const Home = () => {
const [query, setQuery] = useState("");
  return (
    <section id="home">
      <Nav query={query} setQuery={setQuery} />
    <MovieImage />
    </section>
  );
};

export default Home;
