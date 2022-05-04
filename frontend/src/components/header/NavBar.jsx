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
      <p className="rule">?</p>
    </nav>
  );
}

export default NavBar;
