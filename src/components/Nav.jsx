import { useNavigate, Link } from "react-router-dom";
import WebImages from "../utils/Images";
const Nav = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="navbar px-4 py-4">
      <Link to="/">
      <img className="logo" src={WebImages.logo} alt="Movieflex Logo" />
      </Link>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Movie"
          aria-label="Search"
          name="search"
        />
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Nav;