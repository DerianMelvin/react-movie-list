import { useSelector } from "react-redux";

const MovieList = ({ displayModal }) => {
  // Redux setup
  const movies = useSelector((state) => state);

  return movies.length === 0 ? (
    <h2>Not seeing anything? Try typing some movie names</h2>
  ) : (
    movies.map((movie) => {
      return (
        <>
          <div key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={`${movie.Title} Poster`}
              onClick={() => displayModal(movie.Poster)}
            />
            <h1>{movie.Title}</h1>
            <h1>{movie.Year}</h1>
          </div>
        </>
      );
    })
  );
};

export default MovieList;
