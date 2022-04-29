import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Character from "../components/Character";
import CharacterType from "../components/CharacterType";

const heroIds = [346, 285, 289, 38, 498, 720];

function SelectHero({ characters, setSelectedHero }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const boss = characters.find((character) => character.id === 655);
  const hero = characters.find(
    (character) => character.id === heroIds[selectedIndex]
  );

  return (
    <>
      <div className="bossSelect">
        {boss && <Character character={boss} details />}
      </div>
      <Link to="/fight" onClick={() => setSelectedHero(hero)}>
        <img
          src="/src/assets/images/start.png"
          alt="start img"
          className="start"
        />
      </Link>
      <div className="heroSelect">
        <button
          type="button"
          className="previoushero"
          onClick={() =>
            setSelectedIndex(
              (selectedIndex - 1 + heroIds.length) % heroIds.length
            )
          }
        >
          previous
        </button>
        {hero && <Character character={hero} details />}
        <button
          type="button"
          className="nexthero"
          onClick={() => setSelectedIndex((selectedIndex + 1) % heroIds.length)}
        >
          next
        </button>
      </div>
    </>
  );
}

SelectHero.propTypes = {
  characters: PropTypes.arrayOf(CharacterType).isRequired,
  setSelectedHero: PropTypes.func.isRequired,
};

export default SelectHero;
