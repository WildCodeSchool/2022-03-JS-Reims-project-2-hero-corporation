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
      <ul>
        {characters.filter(boss).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
      <img
        src="./src/assets/images/fight.png"
        className="fightimg"
        alt="fight"
      />
      <ul>
        {characters.filter(heroesOnly).map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button className="intelligence" type="button">
          Intelligence
        </button>
        <button className="strength" type="button">
          Strength
        </button>
        <button className="speed" type="button">
          Speed
        </button>
        <button className="power" type="button">
          Power
        </button>
      </div>
    </>
  );
}

Fight.propTypes = {
  characters: PropTypes.arrayOf(Character.propTypes.character).isRequired,
};

export default Fight;
