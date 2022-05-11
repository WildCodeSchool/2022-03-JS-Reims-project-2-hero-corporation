import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTimer } from "use-timer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useModal } from "react-hooks-use-modal";
import Jump from "react-reveal/Jump";
import Flash from "react-reveal/Flash";
import Zoom from "react-reveal/Zoom";
import Character from "../components/Character";
import CharacterType from "../components/CharacterType";
import HeroLossModal from "../components/HeroLossModal";
import "react-toastify/dist/ReactToastify.css";

function randomOnomatopeia() {
  const words = ["bang", "boing", "pow"];
  return words[Math.floor(Math.random() * words.length)];
}

function Fight({ hero, bossesList }) {
  const navigate = useNavigate();
  const [bossLife, setBossLife] = useState(null);
  const [heroLife, setHeroLife] = useState(null);
  const [bossWeakness, setBossWeakness] = useState();
  const [currentBoss, setCurrentBoss] = useState(bossesList[0]);
  const [heroStats, setHeroStats] = useState(hero.powerstats);
  const [previousDamage, setPreviousDamage] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    power: 0,
  });
  const [criticalHit, setCriticalHit] = useState(0);
  const [onomatopeia, setOnomatopeia] = useState();
  const [Modal, open] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  const { time } = useTimer({
    initialTime: 300,
    timerType: "DECREMENTAL",
    endTime: 0,
    autostart: true,
    onTimeOver: () => open(),
  });
  const maxBossLife =
    (currentBoss.powerstats.intelligence +
      currentBoss.powerstats.strength +
      currentBoss.powerstats.speed +
      currentBoss.powerstats.power) *
    10;
  const maxHeroLife =
    hero.powerstats.intelligence +
    hero.powerstats.strength +
    hero.powerstats.speed +
    hero.powerstats.power;
  const bossNumber = bossesList.indexOf(currentBoss) + 1;
  const bossCount = bossesList.length;

  useEffect(() => {
    setOnomatopeia();
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
    let multiplier = Math.floor(heroStats[weapon] / 2.5);
    if (hero.name === "Gladiator") {
      multiplier = Math.floor(multiplier * 0.8);
    }
    const minDamage = Math.floor(multiplier * 0.5);
    let damage = Math.max(multiplier, minDamage);
    if (heroStats[weapon] > 0) {
      if (weapon === bossWeakness) {
        damage = Math.floor(1.8 * damage);
        setCriticalHit(criticalHit + 1);
      }
      setHeroLife((previousState) => Math.max(previousState - 1, 0));
      setBossLife((previousState) => Math.max(previousState - damage, 0));
      setPreviousDamage({ ...previousDamage, [weapon]: damage });
      const newStat = Math.max(heroStats[weapon] - 1, 0);
      setHeroStats({ ...heroStats, [weapon]: newStat });
      setOnomatopeia(randomOnomatopeia());
    } else toast(`Not enought ${[weapon]}`);
  };

  useEffect(() => {
    if (bossLife === 0) {
      if (bossNumber < bossCount) {
        setCurrentBoss(bossesList[bossNumber]);
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
  const minute = () => {
    return Math.floor(time / 60);
  };
  const second = () => {
    return time % 60 < 10 ? `0${time % 60}` : time % 60;
  };

  return (
    <div className="pagefight">
      <div className="timer">
        <div className="timerprogress">
          <p>
            {minute()}:{second()}
          </p>
        </div>
        <div
          className="progressgame"
          data-label={`${bossNumber} / ${bossCount}`}
        >
          <progress
            className="progress-bar"
            value={bossNumber}
            max={bossCount}
          />
        </div>
      </div>
      <div className="chactersfight">
        <div className="bossfight">
          <div className="boss-life">
            <Jump spy={currentBoss} timeout={1000}>
              <Flash when={criticalHit % 3 === 0}>
                <Character character={currentBoss} className="fight-boss">
                  <Zoom spy={bossLife} timeout={1000}>
                    {onomatopeia && (
                      <img
                        className="onomatopeia"
                        src={`./src/assets/images/comic-cloud-${onomatopeia}.png`}
                        alt={onomatopeia}
                      />
                    )}
                  </Zoom>
                </Character>
              </Flash>
            </Jump>
            <div
              className="progressbosslife"
              data-label={` ${bossLife} / ${maxBossLife}`}
            >
              <progress className="bosslife" max={maxBossLife} value={bossLife}>
                bossLife
              </progress>
            </div>
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
                className="intelligence bg-blue-500 min-h-[3rem] max-h-[3rem] relative"
                type="button"
              >
                <img
                  src="./src/assets/images/explose-element.png"
                  alt="explose"
                  className="explose-element"
                />
                <h2 className="text-hero-shadow">
                  🧠 {heroStats.intelligence}
                </h2>
                <h2 className="text-yellow-500 text-explose">
                  {previousDamage.intelligence}
                </h2>
              </button>
              <button
                onClick={() => {
                  useWeapon("strength");
                }}
                className="strength bg-green-500 min-h-[3rem] max-h-[3rem] relative"
                type="button"
              >
                <img
                  src="./src/assets/images/explose-element.png"
                  alt="explose"
                  className="explose-element"
                />
                <h2 className="text-hero-shadow">💪 {heroStats.strength}</h2>
                <h2 className="text-yellow-500 text-explose">
                  {previousDamage.strength}
                </h2>
              </button>
              <button
                onClick={() => {
                  useWeapon("speed");
                }}
                className="speed bg-red-500 min-h-[3rem] max-h-[3rem] relative"
                type="button"
              >
                <img
                  src="./src/assets/images/explose-element.png"
                  alt="explose"
                  className="explose-element"
                />
                <h2 className="text-hero-shadow">⚡ {heroStats.speed}</h2>
                <h2 className="text-yellow-500 text-explose">
                  {previousDamage.speed}
                </h2>
              </button>
              <button
                onClick={() => {
                  useWeapon("power");
                }}
                className="power bg-purple-500 min-h-[3rem] max-h-[3rem] relative"
                type="button"
              >
                <img
                  src="./src/assets/images/explose-element.png"
                  alt="explose"
                  className="explose-element"
                />
                <h2 className="text-hero-shadow">✨ {heroStats.power}</h2>
                <h2 className="text-yellow-500 text-explose">
                  {previousDamage.power}
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal>
        <HeroLossModal />
      </Modal>
    </div>
  );
}
Fight.propTypes = {
  hero: CharacterType.isRequired,
  bossesList: PropTypes.arrayOf(CharacterType).isRequired,
};

export default Fight;
