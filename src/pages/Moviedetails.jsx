import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");
  const [movie, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${query}?api_key=09e6cf9871795d48bba7c9be1465ff3e`
        );
        const data = await response.json();

        if (response.ok) {
          setMovieDetails(data);
        } else {
          setError(`Error ${response.status}: ${data.status_message}`);
        }
      } catch (error) {
        setError("An unexpected error occurred");
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return null;

  return (
    <section className="movie-details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <img
              className="w-100"
              src={IMAGE_BASE_URL + movie.belongs_to_collection.backdrop_path}
              alt=""
            />
          </div>
        </div>
        <div className="row py-4 movie-detail-content">
          <div className="col-lg-6">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
