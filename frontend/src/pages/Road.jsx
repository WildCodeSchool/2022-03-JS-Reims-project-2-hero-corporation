import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import SelectHero from "./SelectHero";
import Fight from "./Fight";

function Road() {
  const [characters, setCharacters] = useState([]);

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
        element={<SelectHero characters={characters} />}
      />
      <Route path="/fight" element={<Fight characters={characters} />} />
    </Routes>
  );
}

export default Road;
