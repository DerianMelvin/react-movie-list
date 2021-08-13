import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from "./redux/actions";

function App() {
  // Redux setup
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();

  // Store current input
  const [query, setQuery] = useState("");

  // Get data from API & store it in redux state
  const getData = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${query}`)
      .then((res) => dispatch(searchMovies(res.data.Search)));
  };

  const displayMovieList = () => {
    if (movies.length === 0) {
      return <h2>Not seeing anything? Try typing some movie names</h2>;
    } else {
      return movies.map((movie) => {
        return (
          <div>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <h1>{movie.Title}</h1>
            <h1>{movie.Year}</h1>
          </div>
        );
      });
    }
  };

  return (
    <div className="App">
      <form onSubmit={getData}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      {displayMovieList()}
    </div>
  );
}

export default App;
