import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useModal } from "react-hooks-use-modal";
import Character from "../components/Character";
import HeroLossModal from "../components/HeroLossModal";
import "react-toastify/dist/ReactToastify.css";

function Fight({ hero, bossesList }) {
  const navigate = useNavigate();
  const [bossLife, setBossLife] = useState(null);
  const [heroLife, setHeroLife] = useState(null);
  const [bossWeakness, setBossWeakness] = useState();
  const [currentBoss, setCurrentBoss] = useState(bossesList[0]);
  const [heroStats, setHeroStats] = useState(hero.powerstats);
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  const maxBossLife =
    currentBoss.powerstats.intelligence +
    currentBoss.powerstats.strength +
    currentBoss.powerstats.speed +
    currentBoss.powerstats.power;
  const maxHeroLife =
    hero.powerstats.intelligence +
    hero.powerstats.strength +
    hero.powerstats.speed +
    hero.powerstats.power;

  useEffect(() => {
    setBossLife(maxBossLife);

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

      setBossLife(Math.max(bossLife - 1, 0));
      setHeroLife(Math.max(heroLife - damage, 0));
      const newStat = Math.max(heroStats[weapon] - 1, 0);
      setHeroStats({ ...heroStats, [weapon]: newStat });
    } else toast(`Not enouth ${[weapon]}`);
  };

  useEffect(() => {
    if (bossLife === 0) {
      if (bossesList.indexOf(currentBoss) < bossesList.length - 1) {
        setCurrentBoss(bossesList[bossesList.indexOf(currentBoss) + 1]);
      } else {
        navigate("/endgame");
      }
    }
  }, [bossLife]);

  useEffect(() => {
    setHeroLife(maxHeroLife);
  }, []);

  useEffect(() => {
    if (heroLife === 0) {
      open();
    }
  }, [heroLife]);

  return (
    <>
      <div className="progressgame">
        <progress id="progressgame" value="20" max="100" />
        <h2>1/5</h2>
      </div>

      <div className="bosslife">
        <h2>
          Boss Life {bossLife}/{maxBossLife}
        </h2>
        <progress id="bosslife" max={maxBossLife} value={bossLife}>
          bossLife
        </progress>

        <Character character={currentBoss} className="fight-boss" />
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
      <HeroLossModal Modal={Modal} open={open} close={close} isOpen={isOpen} />
    </>
  );
}
Fight.propTypes = {
  hero: Character.propTypes.character.isRequired,
  bossesList: propTypes.arrayOf(Character.propTypes.character).isRequired,
};

export default Fight;
