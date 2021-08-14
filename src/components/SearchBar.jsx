import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/actions";
import styles from "../css/SearchBar.module.css";

const SearchBar = () => {
  // Redux setup
  const dispatch = useDispatch();

  // Store current text input
  const [query, setQuery] = useState("");

  // Toggle display for empty or error search
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError(false);
  };

  // Fetch data based on search result & update state
  const getData = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${query}`)
      .then((res) => dispatch(searchMovies(res.data.Search)))
      .catch((error) => setError((prevState) => !prevState));
  };

  return (
    <>
      {error && <div className={styles.error}>There seems to be an error. Try checking your input.</div>}
      <form className={styles.form} onSubmit={getData}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => handleInputChange(e)}
        />
        <button className={styles.search}>Search</button>
      </form>
    </>
  );
};

export default SearchBar;
