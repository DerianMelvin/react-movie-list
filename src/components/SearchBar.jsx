import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  searchMovies,
  incrementIndex,
  appendMovies,
  resetIndex,
} from "../redux/actions";
import styles from "../css/SearchBar.module.css";

const SearchBar = () => {
  // Redux setup
  const index = useSelector((state) => state.index);
  const dispatch = useDispatch();

  // Store current text input
  const [query, setQuery] = useState("");

  // Toggle display for empty or error search
  const [error, setError] = useState(false);

  // Toggle to load more data
  const [loadMore, setLoadMore] = useState(false);

  // Toggle if index has reset
  const [indexReset, setIndexReset] = useState(false);

  // Listens for scroll behaviour
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Checks if loadMore is true
  useEffect(() => {
    if (!loadMore) {
      return;
    }

    loadData();
  }, [loadMore]);

  // Checks if indexReset is true
  useEffect(() => {
    if (!indexReset) {
      return;
    }

    fetchData();
  }, [indexReset]);

  // Checks if browser window is scrolled to bottom
  const handleScroll = () => {
    let difference = document.documentElement.scrollHeight - window.innerHeight;
    let scrollposition = document.documentElement.scrollTop;

    if (difference - scrollposition <= 1) {
      dispatch(incrementIndex());
      setLoadMore(true);
    }

    return;
  };

  // Fetch & load the next data
  const loadData = () => {
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${query}&page=${index}`)
      .then((res) => dispatch(appendMovies(res.data.Search)))
      .catch((error) => console.log(error))
      .then(() => setLoadMore(false));
  };

  // Update query based on input
  // Close any error if occured
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetIndex());
    setIndexReset(true);
  };

  // Fetch data based on search result & update state
  const fetchData = () => {
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${query}&page=${index}`)
      .then((res) => dispatch(searchMovies(res.data.Search)))
      .catch((error) => setError((prevState) => !prevState))
      .then(() => setIndexReset(false));
  };

  return (
    <>
      {error && (
        <div className={styles.error}>
          There seems to be an error. Try checking your input.
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
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
