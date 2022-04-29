import PropTypes from "prop-types";
import "./Character.css";
import "./cards-fighters.css";
import CharacterType from "./CharacterType";

function Character({ character, details }) {
  return (
    <figure className="selectHero fight">
      <figcaption className="figure-container">
        <div className="figure-background">
          <div className="hero-image">
            <img src={character.images.sm} alt={character.name} />
          </div>
          <h3 className="hero-name">{character.name}</h3>
          <div className="all-stats">
            {details && (
              <p>
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
                  <progress
                    id="speed"
                    max="100"
                    value={character.powerstats.speed}
                  >
                    {character.powerstats.speed}
                  </progress>
                </div>
                <div className="power-stats">
                  Power :
                  <progress
                    id="power"
                    max="100"
                    value={character.powerstats.power}
                  >
                    {character.powerstats.power}
                  </progress>
                </div>
              </p>
            )}
          </div>
        </div>
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
