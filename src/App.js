import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movies/search/:query" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;


