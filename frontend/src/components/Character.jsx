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
            {character.powerstats.intelligence} <h4>Intelligence</h4>
          </div>
          <div className="strength-stats">
            {character.powerstats.strength} <h4>Strength</h4>
          </div>
          <div className="speed-stats">
            {character.powerstats.speed} <h4>Speed</h4>
          </div>
          <div className="power-stats">
            {character.powerstats.power} <h4>Power</h4>
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
