import PropTypes from "prop-types";
import Character from "../components/Character";
import CharacterType from "../components/CharacterType";

function SelectHero({ characters, setSelectedHero }) {
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
      <ul>
        {characters.filter(boss).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
      <div className="startbutton">
        <img
          src="/src/assets/images/start.png"
          alt="start button"
          className="start"
        />
      </div>
      <ul>
        {characters.filter(heroesOnly).map((character) => (
          <li key={character.id}>
            <button type="button" onClick={() => setSelectedHero(character)}>
              <Character character={character} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

SelectHero.propTypes = {
  characters: PropTypes.arrayOf(CharacterType).isRequired,
  setSelectedHero: PropTypes.func.isRequired,
};

export default SelectHero;
