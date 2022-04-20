import PropTypes from "prop-types";

export default PropTypes.shape({
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
});
