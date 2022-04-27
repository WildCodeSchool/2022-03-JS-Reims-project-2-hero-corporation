import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Character from "../components/Character";

function Fight({ hero, bossesList }) {
  const navigate = useNavigate();
  const [bossLife, setBossLife] = useState(null);
  const [bossWeakness, setBossWeakness] = useState();
  const [currentBoss, setCurrentBoss] = useState(bossesList[0]);

  useEffect(() => {
    setBossLife(
      currentBoss.powerstats.intelligence +
        currentBoss.powerstats.strength +
        currentBoss.powerstats.speed +
        currentBoss.powerstats.power
    );

    const weaknessValue = Math.min(
      currentBoss.powerstats.intelligence,
      currentBoss.powerstats.strength,
      currentBoss.powerstats.speed,
      currentBoss.powerstats.power
    );

    if (weaknessValue === currentBoss.powerstats.intelligence) {
      setBossWeakness("intelligence");
    }
    if (weaknessValue === currentBoss.powerstats.strength) {
      setBossWeakness("strength");
    }
    if (weaknessValue === currentBoss.powerstats.speed) {
      setBossWeakness("speed");
    }
    if (weaknessValue === currentBoss.powerstats.power) {
      setBossWeakness("power");
    }
  }, [currentBoss]);

  const useWeapon = (weapon) => {
    if (weapon === bossWeakness) {
      setBossLife(Math.max(bossLife - 10, 0));
    } else {
      setBossLife(Math.max(bossLife - 1, 0));
    }
  };

  useEffect(() => {
    if (bossLife === 0) {
      console.warn("The boss is dead");
      if (bossesList.indexOf(currentBoss) < bossesList.length - 1) {
        setCurrentBoss(bossesList[bossesList.indexOf(currentBoss) + 1]);
      } else {
        navigate("/endgame");
      }
    }
  }, [bossLife]);

  return (
    <>
      <Character character={currentBoss} />
      <img
        src="./src/assets/images/fight.png"
        className="fightimg"
        alt="fight"
      />
      <Character character={hero} />
      <div className="buttons">
        <button
          onClick={() => useWeapon("intelligence")}
          className="intelligence"
          type="button"
        >
          Intelligence
        </button>
        <button
          onClick={() => useWeapon("strength")}
          className="strength"
          type="button"
        >
          Strength
        </button>
        <button
          onClick={() => useWeapon("speed")}
          className="speed"
          type="button"
        >
          Speed
        </button>
        <button
          onClick={() => useWeapon("power")}
          className="power"
          type="button"
        >
          Power
        </button>
      </div>
    </>
  );
}

Fight.propTypes = {
  hero: Character.propTypes.character.isRequired,
  bossesList: propTypes.arrayOf(Character.propTypes.character).isRequired,
};

export default Fight;
