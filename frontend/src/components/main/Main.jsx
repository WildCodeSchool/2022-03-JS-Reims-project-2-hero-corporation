import PropTypes from "prop-types";
import CharacterType from "../CharacterType";
import Road from "../../pages/Road";

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
  selectedHero: CharacterType,
  setSelectedHero: PropTypes.func.isRequired,
};

Main.defaultProps = {
  selectedHero: undefined,
};

export default Main;
