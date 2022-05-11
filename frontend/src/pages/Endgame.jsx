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
    </div>
  );
}

export default Endgame;
