import ModalWindow from "./components/ModalWindow";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import styles from "./css/App.module.css";
import { useSelector } from "react-redux";
import MovieDetails from "./components/MovieDetails";

function App() {
  // Redux setup
  const showModal = useSelector(state => state.showModal)
  const showDetails = useSelector(state => state.showDetails);

  return (
    <div className={styles.App}>
      {showModal && <ModalWindow />}
      {showDetails && <MovieDetails />}

      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
