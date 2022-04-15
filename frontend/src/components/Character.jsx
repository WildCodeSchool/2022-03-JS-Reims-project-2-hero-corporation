import PropTypes from "prop-types";

function Character({ character }) {
  return (
    <figure>
      <img src={character.images.sm} alt={character.name} />
      <figcaption>
        {character.name}
        <p>
          Intelligence :
          <progress
            id="intelligence"
            max="100"
            value={character.powerstats.intelligence}
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
      </figcaption>
    </figure>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      sm: PropTypes.string.isRequired,
    }).isRequired,
    powerstats: PropTypes.shape({
      intelligence: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      power: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Character;
