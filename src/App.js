import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movies/search/:query" element={<Movies />} />
      <Route  path="/movies/:imdbID" element={<MovieInfo />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;


