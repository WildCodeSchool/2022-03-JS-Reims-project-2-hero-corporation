import PropTypes from "prop-types";
import Character from "../components/Character";

function Fight({ characters }) {
  const heroesOnly = (element) => element.id === 346;
  const boss = (element) => element.id === 655;

  return (
    <>
      <ul>
        {characters.filter(boss).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
      <img src="./src/assets/fight8.png" className="fightimg" alt="fight" />
      <ul>
        {characters.filter(heroesOnly).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button className="intelligence" type="button">
          Intelligence
        </button>
        <button className="strength" type="button">
          Strength
        </button>
        <button className="speed" type="button">
          Speed
        </button>
        <button className="power" type="button">
          Power
        </button>
      </div>
    </>
  );
}

Fight.propTypes = {
  characters: PropTypes.arrayOf(Character.propTypes.character).isRequired,
};

export default Fight;
