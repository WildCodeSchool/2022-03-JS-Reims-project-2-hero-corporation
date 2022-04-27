import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Character from "../components/Character";
import "react-toastify/dist/ReactToastify.css";

function Fight({ boss, hero }) {
  const [bossLife, setBossLife] = useState(0);
  const [bossWeakness, setBossWeakness] = useState();
  const [heroStats, setHeroStats] = useState(hero.powerstats);
  const maxBossLife =
    boss.powerstats.intelligence +
    boss.powerstats.strength +
    boss.powerstats.speed +
    boss.powerstats.power;
  useEffect(() => {
    setBossLife(maxBossLife);

    const weaknessValue = Math.min(
      boss.powerstats.intelligence,
      boss.powerstats.strength,
      boss.powerstats.speed,
      boss.powerstats.power
    );

    if (weaknessValue === boss.powerstats.intelligence) {
      setBossWeakness("intelligence");
    }
    if (weaknessValue === boss.powerstats.strength) {
      setBossWeakness("strength");
    }
    if (weaknessValue === boss.powerstats.speed) {
      setBossWeakness("speed");
    }
    if (weaknessValue === boss.powerstats.power) {
      setBossWeakness("power");
    }
  }, [boss]);

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
      console.warn("Hello");
    }
  }, [bossLife]);

  return (
    <>
      <h2>
        Boss Life {bossLife}/{maxBossLife}
      </h2>
      <progress id="bosslife" max={maxBossLife} value={bossLife}>
        bossLife
      </progress>

      <Character character={boss} />
      <img
        src="./src/assets/images/fight.png"
        className="fightimg"
        alt="fight"
      />
      <Character character={hero} />
      <ToastContainer />
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
  boss: Character.propTypes.character.isRequired,
  hero: Character.propTypes.character.isRequired,
};

export default Fight;
