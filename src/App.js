import "./App.css";
import { useState } from "react";
import ModalWindow from "./components/ModalWindow";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  // Set modal window display & image
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const displayModal = (imgSrc) => {
    setModalImage(imgSrc);
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="App">
      {showModal && <ModalWindow imgSrc={modalImage} setShowModal={setShowModal} />}

      <SearchBar />
      <MovieList displayModal={displayModal} />
    </div>
  );
}

export default App;
