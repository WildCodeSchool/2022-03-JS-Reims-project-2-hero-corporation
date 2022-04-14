function Fight({ characters }) {
  const boss = (element) => element.id === 655;
  const heros = (element) => element.id === 346;
  return (
    <>
      <img
        src="./src/assets/logo1.png"
        className="logo1"
        alt="Hero Corporation"
      />
      <ul>
        {characters.filter(boss).map((character) => (
          <li key={character.id}>
            <figure>
              <img src={character.images.sm} alt={character.name} />
              <figcaption>
                {character.name}
                <p>
                  Intelligence :
                  <progress
                    id="intelligence"
                    max="100"
                    value={character.powerstats.intelligence}
                  >
                    {character.powerstats.intelligence}
                  </progress>
                  Strength :
                  <progress
                    id="strength"
                    max="100"
                    value={character.powerstats.strength}
                  >
                    {character.powerstats.strenght}
                  </progress>
                  Speed :
                  <progress
                    id="speed"
                    max="100"
                    value={character.powerstats.speed}
                  >
                    {character.powerstats.speed}
                  </progress>
                  Power :
                  <progress
                    id="power"
                    max="100"
                    value={character.powerstats.power}
                  >
                    {character.powerstats.power}
                  </progress>
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <img src="./src/assets/fight8.png" class="fightimg" alt="fight" />
      <ul>
        {characters.filter(heros).map((character) => (
          <li key={character.id}>
            <figure>
              <img src={character.images.sm} alt={character.name} />
              <figcaption>
                {character.name}
                <p>
                  Intelligence :
                  <progress
                    id="intelligence"
                    max="100"
                    value={character.powerstats.intelligence}
                  >
                    {character.powerstats.intelligence}
                  </progress>
                  Strength :
                  <progress
                    id="strength"
                    max="100"
                    value={character.powerstats.strength}
                  >
                    {character.powerstats.strenght}
                  </progress>
                  Speed :
                  <progress
                    id="speed"
                    max="100"
                    value={character.powerstats.speed}
                  >
                    {character.powerstats.speed}
                  </progress>
                  Power :
                  <progress
                    id="power"
                    max="100"
                    value={character.powerstats.power}
                  >
                    {character.powerstats.power}
                  </progress>
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="Buttons">
        <button className="Intelligence">Intelligence</button>
        <button className="Strength">Strength</button>
        <button className="Speed">Speed</button>
        <button className="Power">Power</button>
      </div>
    </>
  );
}

export default Fight;
