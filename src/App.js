import { useState } from "react";
import ModalWindow from "./components/ModalWindow";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import styles from "./css/App.module.css";

function App() {
  // Set modal window display & image
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const displayModal = (imgSrc) => {
    setModalImage(imgSrc);
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className={styles.App}>
      {showModal && (
        <ModalWindow imgSrc={modalImage} setShowModal={setShowModal} />
      )}

      <SearchBar />
      <MovieList displayModal={displayModal} />
    </div>
  );
}

export default App;
