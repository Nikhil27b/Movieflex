import WebImages from "../utils/Images";

const Nav = () => {
  return (
    <div className="navbar px-4 py-4"> 
      <img className="logo" src={WebImages.logo} alt="Movieflex Logo" />
    </div>
  );
};

export default Nav;
