import { useEffect, useState } from "react";
import Character from "../components/Character";

function Fight({ boss, hero }) {
  const [bossLife, setBossLife] = useState(0);
  const [bossWeakness, setBossWeakness] = useState();

  useEffect(() => {
    setBossLife(
      boss.powerstats.intelligence +
        boss.powerstats.strength +
        boss.powerstats.speed +
        boss.powerstats.power
    );

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
    if (weapon === bossWeakness) {
      setBossLife(Math.max(bossLife - 10, 0));
    } else {
      setBossLife(Math.max(bossLife - 1, 0));
    }
  };

  useEffect(() => {
    if (bossLife === 0) {
      console.warn("Hello");
    }
  }, [bossLife]);

  return (
    <>
      <Character character={boss} />
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
  boss: Character.propTypes.character.isRequired,
  hero: Character.propTypes.character.isRequired,
};

export default Fight;
