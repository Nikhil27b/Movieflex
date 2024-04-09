import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";


const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US&query=${query}`
        );
        const data = await response.json();

        if (response.ok) {
          setMovies(data.results);
        } else {
          setError(`Error ${response.status}: ${data.status_message}`);
        }
      } catch (error) {
        setError("An unexpected error occurred");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div className="container-fluid seach-bar">
      <h2 className="heading">Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movies.length > 0 ? (
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

export default Search;
