import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="/src/assets/images/HC-logo.png"
          alt="Hero Corporation Logo "
          className="hclogo"
        />
      </Link>
      <Link to="/selecthero">Select Hero</Link>
    </nav>
  );
}

export default NavBar;
