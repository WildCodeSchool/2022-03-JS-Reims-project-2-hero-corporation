import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Jump from "react-reveal/Jump";
import Character from "../components/Character";
import "react-toastify/dist/ReactToastify.css";

function Fight({ hero, bossesList }) {
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(true);
  const [bossLife, setBossLife] = useState(null);
  const [bossWeakness, setBossWeakness] = useState();
  const [currentBoss, setCurrentBoss] = useState(bossesList[0]);
  const [heroStats, setHeroStats] = useState(hero.powerstats);
  const maxBossLife =
    currentBoss.powerstats.intelligence +
    currentBoss.powerstats.strength +
    currentBoss.powerstats.speed +
    currentBoss.powerstats.power;
  useEffect(() => {
    setBossLife(maxBossLife);
    setTrigger(true);

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
    if (heroStats[weapon] > 0) {
      if (weapon === bossWeakness) {
        damage = 10;
      }

      setBossLife(Math.max(bossLife - damage, 0));
      const newStat = Math.max(heroStats[weapon] - 1, 0);
      setHeroStats({ ...heroStats, [weapon]: newStat });
    } else toast(`Not enouth ${[weapon]}`);
  };

  useEffect(() => {
    if (bossLife === 0) {
      if (bossesList.indexOf(currentBoss) < bossesList.length - 1) {
        setCurrentBoss(bossesList[bossesList.indexOf(currentBoss) + 1]);
        setTrigger(false);
      } else {
        navigate("/endgame");
      }
    }
  }, [bossLife]);

  return (
    <>
      <div className="progressgame">
        <progress
          id="progressgame"
          value={bossesList.indexOf(currentBoss) + 1}
          max={bossesList.length}
        />
        <h2>
          {`${bossesList.indexOf(currentBoss) + 1} / ${bossesList.length}`}
        </h2>
      </div>

      <div className="bosslife">
        <h2>
          Boss Life {bossLife}/{maxBossLife}
        </h2>
        <progress id="bosslife" max={maxBossLife} value={bossLife}>
          bossLife
        </progress>

        <Jump when={trigger}>
          <Character character={currentBoss} className="fight-boss" />
        </Jump>
      </div>
      <img
        src="./src/assets/images/versus-element.png"
        className="vs-element"
        alt="versus"
      />
      <div className="heroAttack">
        <Character character={hero} className="fight-hero" />
        <ToastContainer />
        <div className="buttons">
          <button
            onClick={() => {
              useWeapon("intelligence");
            }}
            className="intelligence"
            type="button"
          >
            <h2>{heroStats.intelligence}</h2>
            <h2>{hero.powerstats.intelligence}</h2>
          </button>
          <button
            onClick={() => {
              useWeapon("strength");
            }}
            className="strength"
            type="button"
          >
            <h2>{heroStats.strength}</h2>
            <h2>{hero.powerstats.strength}</h2>
          </button>
          <button
            onClick={() => {
              useWeapon("speed");
            }}
            className="speed"
            type="button"
          >
            <h2>{heroStats.speed}</h2>
            <h2>{hero.powerstats.speed}</h2>
          </button>
          <button
            onClick={() => {
              useWeapon("power");
            }}
            className="power"
            type="button"
          >
            <h2>{heroStats.power}</h2>
            <h2>{hero.powerstats.power}</h2>
          </button>
        </div>
      </div>
    </>
  );
}
Fight.propTypes = {
  hero: Character.propTypes.character.isRequired,
  bossesList: propTypes.arrayOf(Character.propTypes.character).isRequired,
};

export default Fight;
