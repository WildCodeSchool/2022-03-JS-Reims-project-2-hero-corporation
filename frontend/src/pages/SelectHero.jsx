import PropTypes from "prop-types";
import Character from "../components/Character";

function SelectHero({ characters }) {
  const heroesOnly = (element) =>
    element.id === 346 ||
    element.id === 285 ||
    element.id === 289 ||
    element.id === 38 ||
    element.id === 498 ||
    element.id === 720;
  const boss = (element) => element.id === 655;

  return (
    <>
      <img
        src="./src/assets/logo1.png"
        className="logo1"
        alt="Hero Corporation"
      />
      <ul>
        {characters.filter(boss).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
      <img
        src="./src/assets/Sans_titre_-_2.png"
        alt="Start"
        className="start"
      />
      <ul>
        {characters.filter(heroesOnly).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
    </>
  );
}

SelectHero.propTypes = {
  characters: PropTypes.arrayOf(Character.propTypes.character).isRequired,
};

export default SelectHero;
