import { Link } from "react-router-dom";
import "./Endgame.css";

function Endgame() {
  return (
    <div className="main-endgame">
      <div className="bande-header">
        <h2 className="bande-win">Mission accomplished !</h2>

        <img
          src="src/assets/images/star-element.png"
          alt="star"
          className="star-image1"
        />
        <img
          src="src/assets/images/star-element.png"
          alt="star"
          className="star-image2"
        />
        <img
          src="src/assets/images/star-element.png"
          alt="star"
          className="star-image3"
        />
      </div>
      <img
        src="/src/assets/images/congratulations-element.png"
        alt="Congratulations !"
        className="congratulations-element"
      />

      <div className="comic-bubble-container">
        <img
          src="/src/assets/images/comic-bubble.png"
          className="comic-bubble"
          alt="comic bubble"
        />
        <p className="bubble-speech">
          You have stopped Thanos from destroying the planet ! And so once
          again, the day is saved thanks to Hero Corporation !
        </p>
      </div>
      <Link to="/selecthero">
        <img
          src="/src/assets/images/play-again-element.png"
          alt="play again"
          className="play-again"
        />
      </Link>
    </div>
  );
}

export default Endgame;
