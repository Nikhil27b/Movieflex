import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, id,overview,release_date } = movie;
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL2;

  return (
    <>
      <div className="card-movie">
        <img
          src={IMAGE_BASE_URL + poster_path}
          loading="lazy"
          alt="Movie Poster All"
        />
        <div className="card-details">
          <h2>{title}</h2>
          <p className="para">{overview}</p>
          <div className="card-body">
            <p>{vote_average}</p>
            <p>{release_date}</p>
          </div>
          <Link to={`/movie-review?id=${id}`}>Read More {'>'} </Link>
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
