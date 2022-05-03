import PropTypes from "prop-types";
import "./Character.css";
import CharacterType from "./CharacterType";

function Character({ character, details, figcaption, className }) {
  return (
    <article className={className}>
      <h3 className="hero-name">{character.name}</h3>
      <figure className="hero-image-container">
        <img
          className="hero-image"
          src={character.images.lg}
          alt={character.name}
        />
        {figcaption && (
          <figcaption className="hero-biography">
            <p>
              Hi Im {character.biography.fullName} race of{" "}
              {character.appearance.race} I measure{" "}
              {character.appearance.height[0]} and i weight{" "}
              {character.appearance.weight[0]} from{" "}
              {character.biography.publisher}. Come play with me !
            </p>
          </figcaption>
        )}
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
  figcaption: PropTypes.bool,
  className: PropTypes.string,
};
Character.defaultProps = {
  details: false,
  figcaption: false,
  className: " ",
};
export default Character;
