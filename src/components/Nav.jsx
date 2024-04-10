import { useNavigate, Link } from "react-router-dom";
import WebImages from "../utils/Images";
import useFetchMovies from "../services/Fetchapi";

const Nav = () => {
  const navigate = useNavigate();
  const BASE_URL = "https://api.themoviedb.org/3/";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query !== "") {
      navigate(`/search?query=${query}`);
    }
  };

  const {
    loading,
    error,
    data: genre,
  } = useFetchMovies(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!genre) return null;

  console.log(genre);

  return (
    <div className="navbar">
      <div className="main-nav">
        <Link className="brand-logo" to="/">
          <img className="logo" src={WebImages.logo} alt="Movieflex Logo" />
        </Link>
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search Movie"
            aria-label="Search"
            name="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="sublink">
        <ul>
          {genre.genres.map((genreItem) => (
            <li key={genreItem.id}>
              <Link to={`/movie-category?id=${genreItem.id}`}>
                {genreItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
