import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/actions";

const SearchBar = () => {
  // Redux setup
  const dispatch = useDispatch();

  // Store current text input
  const [query, setQuery] = useState("");

  // Fetch data from API & update state
  const getData = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${query}`)
      .then((res) => dispatch(searchMovies(res.data.Search)));
  };

  return (
    <form onSubmit={getData}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
