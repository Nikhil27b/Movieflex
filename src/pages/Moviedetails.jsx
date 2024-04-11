import { useSearchParams } from "react-router-dom";
import useFetchMovies from "../services/Fetchapi";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL;

const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");

  const {
    loading,
    error,
    data: movie,
  } = useFetchMovies(
    query ? `${BASE_URL}/movie/${query}?api_key=${API_KEY}` : null,
    [query]
  );

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return null;

  return (
    <section className="movie-details">
      <div className="container-fluid">
        <div className="hero-img">
          <img
            src={
              movie.belongs_to_collection
                ? IMAGE_BASE_URL + movie.belongs_to_collection.backdrop_path
                : IMAGE_BASE_URL + movie.backdrop_path
            }
            alt=""
          />
        </div>

        <div className="hero-content">
          <div className="hero-content-left">
            <h2>{movie.original_title}</h2>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-list">
                  {genre.name}
                </span>
              ))}
            </div>
            <p>{movie.overview ? movie.overview : ""}</p>
            <p>
              Release Date :
              {movie.release_date ? movie.release_date : "Unknown"}
              <span>Popularity : {movie.popularity}</span>
            </p>
          </div>
          <div className="hero-content-right">
            <img
              className="poster"
              src={IMAGE_BASE_URL + movie.backdrop_path}
              alt=""
            />
            <h2>Production Companies</h2>
            <div className="production-companies">
              {movie.production_companies.map((company) => (
                <div key={company.id} className="company">
                  <p>{company.name}</p>
                </div>
              ))}
            </div>

            {movie.homepage ? (
              <a href={movie.homepage} target="_blank">
                Visit Home Page
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
