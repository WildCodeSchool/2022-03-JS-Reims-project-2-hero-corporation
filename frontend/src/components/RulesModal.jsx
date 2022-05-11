import "./RulesModal.css";

function RulesModal() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="boxrules box2rules flex justify-center items-center flex-col">
        <h2>Règles</h2>
        <ul>
          <li>Une fois sur l&apos;écran de sélection du héros</li>
          <li>Fais défiler les héros avec les flêches</li>
          <li>Une fois ton héros séléctionné appuie sur start</li>
          <li>Le combat commence</li>
          <li>
            Tu as la possibilité de choisir entre 4 attaques différentes qui
            représentent ton élément de frappe
          </li>
          <li>Certaines attaques infligent plus de dégats que d&apos;autres</li>
          <li>
            Attention: plus une stat diminue, moins ses dégats seront élevés
          </li>
          <li>Réfléchis bien à l&apos;utilisation de tes compétences</li>
          <li>Ne traine pas, il ne te reste que 5 minutes !</li>
        </ul>
      </div>
    </div>
  );
}

export default RulesModal;
