import { Link } from "react-router-dom";
import Logo from "../assets/images/hero-corporation-logo-mobile.png";

function Home() {
  return (
    <div className="flex-column">
      <img
        src={Logo}
        alt="hero-corporation-logo"
        className="hero-corporation-logo"
      />
      <Link to="/selecthero">
        <img
          src="/src/assets/images/HeroCorporation-end-elements-23.png"
          alt="play img"
          className="play"
        />
      </Link>
    </div>
  );
}

export default Home;
