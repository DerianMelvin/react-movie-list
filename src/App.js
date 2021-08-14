import ModalWindow from "./components/ModalWindow";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import styles from "./css/App.module.css";
import { useSelector } from "react-redux";

function App() {
  // Redux setup
  const showModal = useSelector(state => state.showModal)

  return (
    <div className={styles.App}>
      {showModal && <ModalWindow />}

      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
