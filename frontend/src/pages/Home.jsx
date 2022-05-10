import { Link } from "react-router-dom";
import Logo from "../assets/images/hero-corporation-logo-mobile.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="banner">
        <div className="banner-presentation">Ready for a new adventure ?</div>
        <div className="edition-number-container">
          <div className="edition-number">
            <h2>#01</h2>May 2022
          </div>
        </div>
      </div>
      <div className="flex-column">
        <img
          src={Logo}
          alt="hero-corporation-logo"
          className="hero-corporation-logo"
        />
        <Link to="/selecthero">
          <img
            src="/src/assets/images/play-element.png"
            alt="play img"
            className="play"
          />
        </Link>
      </div>
      <div className="banner-footer">
        <div className="banner-teaser">
          FT. Aquaman, Odin, Goku and many others ...
        </div>
      </div>
    </>
  );
}

export default Home;
