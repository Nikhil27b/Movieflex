import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetchMovies from "../services/Fetchapi";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

const Genre = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");

  const { loading, error, data } = useFetchMovies(
    query
      ? `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${query}&sort_by=popularity.desc`
      : null,
    [query]
  );

  const movies = data ? data.results : [];

  return (
    <div className="container-fluid seach-bar">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movies && movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Genre;
