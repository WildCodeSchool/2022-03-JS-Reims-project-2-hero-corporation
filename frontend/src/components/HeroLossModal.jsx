import { Link } from "react-router-dom";
import "./HeroLossModal.css";

function HeroLossModal() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="box box2 flex justify-center items-center flex-col">
        <img
          src="/src/assets/images/youlose.png"
          alt="loss img"
          className="lose-img"
        />
        <Link to="/selecthero" className="flex justify-center items-center">
          <img
            src="/src/assets/images/continue.png"
            alt="continue img"
            className="continue-img w-2/4"
          />
        </Link>
      </div>
    </div>
  );
}

export default HeroLossModal;
