import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleModal, setModalImage } from "../redux/actions";
import styles from "../css/MovieList.module.css";

const MovieList = () => {
  // Redux setup
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  // Set modal window image & toggle modal display
  const displayModal = (imgSrc) => {
    dispatch(setModalImage(imgSrc));
    dispatch(toggleModal(true));
  };

  return (
    <div className={styles.container}>
      {movies.length === 0 ? (
        <h2 className={styles.empty}>
          Not seeing anything? Try typing some movie names
        </h2>
      ) : (
        movies.map((movie) => {
          return (
            <div className={styles.movie} key={movie.imdbID}>
              <img
                className={styles.poster}
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                onClick={() => displayModal(movie.Poster)}
              />
              <div className={styles.info}>
                <h1>{movie.Title}</h1>
                <h2 className={styles.year}>{movie.Year}</h2>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MovieList;
