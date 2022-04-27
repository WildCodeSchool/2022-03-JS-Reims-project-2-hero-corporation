import { useEffect, useState } from "react";
import Character from "../components/Character";

function Fight({ boss, hero }) {
  const [bossLife, setBossLife] = useState(0);
  const [bossWeakness, setBossWeakness] = useState();
  const [heroIntelligence, setHeroIntelligence] = useState(
    hero.powerstats.intelligence
  );
  const [heroSpeed, setHeroSpeed] = useState(hero.powerstats.speed);
  const [heroPower, setHeroPower] = useState(hero.powerstats.power);
  const [heroStrength, setHeroStrength] = useState(hero.powerstats.strength);

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
  const decrementStatIntelligence = () => {
    setHeroIntelligence(Math.max(heroIntelligence - 1, 0));
  };
  const decrementStatSpeed = () => {
    setHeroSpeed(Math.max(heroSpeed - 1, 0));
  };
  const decrementStatPower = () => {
    setHeroPower(Math.max(heroPower - 1, 0));
  };
  const decrementStatStrength = () => {
    setHeroStrength(Math.max(heroStrength - 1, 0));
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
          onClick={() => {
            useWeapon("intelligence");
            decrementStatIntelligence();
          }}
          className="intelligence"
          type="button"
        >
          <h2>{hero.powerstats.intelligence}</h2>
          <h2>{heroIntelligence}</h2>
        </button>
        <button
          onClick={() => {
            useWeapon("strength");
            decrementStatStrength();
          }}
          className="strength"
          type="button"
        >
          <h2>{hero.powerstats.strength}</h2>
          <h2>{heroStrength}</h2>
        </button>
        <button
          onClick={() => {
            useWeapon("speed");
            decrementStatSpeed();
          }}
          className="speed"
          type="button"
        >
          <h2>{hero.powerstats.speed}</h2>
          <h2>{heroSpeed}</h2>
        </button>
        <button
          onClick={() => {
            useWeapon("power");
            decrementStatPower();
          }}
          className="power"
          type="button"
        >
          <h2>{hero.powerstats.power}</h2>
          <h2>{heroPower}</h2>
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
