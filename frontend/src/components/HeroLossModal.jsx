import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./HeroLossModal.css";

function HeroLossModal({ Modal }) {
  return (
    <div>
      <Modal>
        <div className="flex justify-center items-center flex-col">
          <div className="box box2 flex justify-center items-center flex-col">
            <h3>You Lose !</h3>
            <Link to="/selecthero">
              <img
                src="/src/assets/images/start.png"
                alt="start img"
                className="start"
              />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

HeroLossModal.propTypes = {
  Modal: propTypes.elementType.isRequired,
};

export default HeroLossModal;
