import PropTypes from "prop-types";
import "./Character.css";
import CharacterType from "./CharacterType";

function Character({ character, details }) {
  return (
    <figure>
      <img src={character.images.sm} alt={character.name} />
      <figcaption>
        <h3>{character.name}</h3>
        {details && (
          <p>
            Intelligence :
            <progress
              id="intelligence"
              max="100"
              value={character.powerstats.intelligence}
              // state heroIntelligence => set change en function des regle du jeu, default egale character.powerstats.intelligence
              // value={heroIntelligence}
            >
              {character.powerstats.intelligence}
            </progress>
            Strength :
            <progress
              id="strength"
              max="100"
              value={character.powerstats.strength}
            >
              {character.powerstats.strength}
            </progress>
            Speed :
            <progress id="speed" max="100" value={character.powerstats.speed}>
              {character.powerstats.speed}
            </progress>
            Power :
            <progress id="power" max="100" value={character.powerstats.power}>
              {character.powerstats.power}
            </progress>
          </p>
        )}
      </figcaption>
    </figure>
  );
}

Character.propTypes = {
  character: CharacterType.isRequired,
  details: PropTypes.bool,
};
Character.defaultProps = {
  details: false,
};
export default Character;
