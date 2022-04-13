import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SelectHero from "./SelectHero";
import Fight from "./Fight";

function Road() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selecthero" element={<SelectHero />} />
      <Route path="/fight" element={<Fight />} />
    </Routes>
  );
}

export default Road;
