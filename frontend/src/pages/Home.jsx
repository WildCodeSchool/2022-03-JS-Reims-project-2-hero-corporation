import { Link } from "react-router-dom";
import Logo from "../assets/images/hero-corporation-logo-mobile.png";

function Home() {
  return (
    <>
      <img
        src={Logo}
        alt="hero-corporation-logo"
        className="hero-corporation-logo"
      />
      <Link to="/selecthero">
        <img
          src="/src/assets/images/start.png"
          alt="start img"
          className="start"
        />
      </Link>
    </>
  );
}

export default Home;
