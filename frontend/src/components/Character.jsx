import PropTypes from "prop-types";
import "./Character.css";
import CharacterType from "./CharacterType";

function Character({ character, details }) {
  return (
    <article className="hero-container">
      <h3 className="hero-name">{character.name}</h3>
      <figure className="hero-image-container">
        <img
          className="hero-image"
          src={character.images.sm}
          alt={character.name}
        />
        <figcaption className="hero-biography">Lorem ipsum</figcaption>
      </figure>
      {details && (
        <div className="hero-stats">
          <div className="intelligence-stats">
            Intelligence :
            <progress
              id="intelligence"
              max="100"
              value={character.powerstats.intelligence}
            >
              {character.powerstats.intelligence}
            </progress>
          </div>
          <div className="strength-stats">
            Strength :
            <progress
              id="strength"
              max="100"
              value={character.powerstats.strength}
            >
              {character.powerstats.strength}
            </progress>
          </div>
          <div className="speed-stats">
            Speed :
            <progress id="speed" max="100" value={character.powerstats.speed}>
              {character.powerstats.speed}
            </progress>
          </div>
          <div className="power-stats">
            Power :
            <progress id="power" max="100" value={character.powerstats.power}>
              {character.powerstats.power}
            </progress>
          </div>
        </div>
      )}
    </article>
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
