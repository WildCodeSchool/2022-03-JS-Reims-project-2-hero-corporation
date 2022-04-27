import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Character from "../components/Character";

function Fight({ hero, bossesList }) {
  const navigate = useNavigate();
  const [bossLife, setBossLife] = useState(null);
  const [bossWeakness, setBossWeakness] = useState();
  const [currentBoss, setCurrentBoss] = useState(bossesList[0]);
  const [heroStats, setHeroStats] = useState(hero.powerstats);

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
    let damage = 1;

    if (weapon === bossWeakness) {
      damage = 10;
    }

    setBossLife(Math.max(bossLife - damage, 0));
    const newStat = Math.max(heroStats[weapon] - 1, 0);
    setHeroStats({ ...heroStats, [weapon]: newStat });
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
          onClick={() => {
            useWeapon("intelligence");
          }}
          className="intelligence"
          type="button"
        >
          <h2>{hero.powerstats.intelligence}</h2>
          <h2>{heroStats.intelligence}</h2>
        </button>
        <button
          onClick={() => {
            useWeapon("strength");
          }}
          className="strength"
          type="button"
        >
          <h2>{hero.powerstats.strength}</h2>
          <h2>{heroStats.strength}</h2>
        </button>
        <button
          onClick={() => {
            useWeapon("speed");
          }}
          className="speed"
          type="button"
        >
          <h2>{hero.powerstats.speed}</h2>
          <h2>{heroStats.speed}</h2>
        </button>
        <button
          onClick={() => {
            useWeapon("power");
          }}
          className="power"
          type="button"
        >
          <h2>{hero.powerstats.power}</h2>
          <h2>{heroStats.power}</h2>
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
