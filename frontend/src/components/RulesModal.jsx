import "./RulesModal.css";

function RulesModal() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="boxrules box2rules flex justify-center items-center flex-col">
        <h2>Règles</h2>
        <ul>
          <li>Une fois sur l&apos;écran de sélection du héro</li>
          <li>Fait défiller les héro avec les flêches</li>
          <li>Une fois ton choix fait appuie sur start</li>
          <li>
            Le combat commence choisi parmis tes 4 attaques elles correspondes à
            tes capacitées.
          </li>
          <li>Certaine attaques infligent plus de dégat que d&apos;autres</li>
          <li>Attention plus une stat diminue moins les dégats sont élevés</li>
          <li>
            Réfléchis bien à l&apos;utilisation de tes points d&apos;attaques
            Pense au temps il n&apos;est pas illimité
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RulesModal;
