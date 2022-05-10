import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import SelectHero from "./SelectHero";
import Fight from "./Fight";
import Endgame from "./Endgame";

const bossesID = [639, 320, 141, 532, 655]; // Stromtrooper, Heat-Wave, Bullseye, Pyro, Thanos

function Road() {
  const [characters, setCharacters] = useState([]);
  const [selectedHero, setSelectedHero] = useState();
  const [bossesList, setBossesList] = useState([]);

  const boss = (element) => element.id === 655;

  useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        setCharacters(response.data);
        setBossesList(
          response.data.filter((element) => bossesID.includes(element.id))
        );
      });
    setBossesList(bossesID);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/selecthero"
        element={
          <SelectHero
            characters={characters}
            selectedHero={selectedHero}
            setSelectedHero={setSelectedHero}
          />
        }
      />
      <Route
        path="/fight"
        element={
          selectedHero ? (
            <Fight
              boss={characters.find(boss)}
              hero={selectedHero}
              bossesList={bossesList}
              setBossesList={setBossesList}
            />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route path="/endgame" element={<Endgame />} />
    </Routes>
  );
}

export default Road;
