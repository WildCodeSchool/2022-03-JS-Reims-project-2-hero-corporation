import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/selecthero">Select Hero</Link>
      <Link to="/fight">Fight</Link>
    </nav>
  );
}

export default NavBar;
