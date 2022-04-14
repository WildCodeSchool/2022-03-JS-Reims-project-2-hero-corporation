function SelectHero({ characters }) {
  const heros = (element) =>
    element.id === 346 ||
    element.id === 285 ||
    element.id === 289 ||
    element.id === 38 ||
    element.id === 498 ||
    element.id === 720;
  const boss = (element) => element.id === 655;

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
    </>
  );
}

export default SelectHero;
