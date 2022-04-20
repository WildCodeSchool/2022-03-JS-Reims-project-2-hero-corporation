import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import SelectHero from "./SelectHero";
import Fight from "./Fight";
import CharacterType from "../components/CharacterType";

function Road(props) {
  const [characters, setCharacters] = useState([]);
  const { selectedHero, setSelectedHero } = props;

  useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        setCharacters(response.data);
      });
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
          <Fight
            characters={characters}
            selectedHero={selectedHero}
            setSelectedHero={setSelectedHero}
          />
        }
      />
    </Routes>
  );
}

Road.propTypes = {
  selectedHero: CharacterType,
  setSelectedHero: PropTypes.func.isRequired,
};

Road.defaultProps = {
  selectedHero: undefined,
};

export default Road;
