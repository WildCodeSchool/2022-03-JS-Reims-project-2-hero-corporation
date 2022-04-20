import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [selectedHero, setSelectedHero] = useState();
  return (
    <div className="App">
      <Header />
      <Main selectedHero={selectedHero} setSelectedHero={setSelectedHero} />
      <Footer />
    </div>
  );
}

export default App;
