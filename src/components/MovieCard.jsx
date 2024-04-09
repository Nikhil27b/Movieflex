import WebImages from "../utils/Images";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path ,id} = movie;
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="card-movie">
        <img src={IMAGE_BASE_URL + poster_path} loading="lazy" alt="Movie Poster" />
        <div className="card-details">
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <Link to={`/movie-review?id=${id}`}>Movie Details</Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
