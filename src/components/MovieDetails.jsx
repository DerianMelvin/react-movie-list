import { useDispatch, useSelector } from "react-redux";
import { toggleDisplayDetails } from "../redux/actions";
import styles from "../css/MovieDetails.module.css";

const MovieDetails = () => {
  // Redux setup
  const movieDetails = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movieDetails.Poster} alt={`${movieDetails.Title} Poster`} />
      <div className={styles.containerDetails}>
        <div className={styles.details}>
          <h2>{movieDetails.Title}</h2>
          <h3>Year: <span>{movieDetails.Year}</span></h3>
          <h3>Rated: <span>{movieDetails.Rated}</span></h3>
          <h3>Released: <span>{movieDetails.Released}</span></h3>
          <h3>Runtime: <span>{movieDetails.Runtime}</span></h3>
          <h3>Genre: <span>{movieDetails.Genre}</span></h3>
          <h3>Director: <span>{movieDetails.Director}</span></h3>
          <h3>Writer: <span>{movieDetails.Writer}</span></h3>
          <h3>Actors: <span>{movieDetails.Actors}</span></h3>
          <h3>Plot: <span>{movieDetails.Plot}</span></h3>
        </div>
      </div>
      <button className={styles.button} onClick={() => dispatch(toggleDisplayDetails(false))}>Close</button>
    </div>
  )
}

export default MovieDetails
