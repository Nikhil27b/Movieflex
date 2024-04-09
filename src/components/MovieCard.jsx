import WebImages from "../utils/Images";

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path } = movie;
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="card-movie">
        <img src={IMAGE_BASE_URL + poster_path} loading="lazy" alt="Movie Poster" />
        <div className="card-details">
          <h2>{title}</h2>
          <p>{vote_average}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
