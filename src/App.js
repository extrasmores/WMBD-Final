import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>

    <div className="App">
      {/* <Nav /> */}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;


