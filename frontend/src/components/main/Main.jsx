import PropTypes from "prop-types";
import Road from "../../pages/Road";
import Character from "../Character";

function Main(props) {
  const { selectedHero, setSelectedHero } = props;
  return (
    <>
      <p>Main</p>
      <Road selectedHero={selectedHero} setSelectedHero={setSelectedHero} />
    </>
  );
}

Main.propTypes = {
  selectedHero: Character.propTypes.character.isRequired,
  setSelectedHero: PropTypes.func.isRequired,
};

export default Main;
