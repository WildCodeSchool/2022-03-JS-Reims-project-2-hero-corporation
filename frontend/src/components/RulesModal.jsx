import "./RulesModal.css";

function RulesModal() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="boxrules box2rules flex justify-center items-center flex-col">
        <h2>Rules</h2>
        <ul>
          <li>When on the hero selection menu</li>
          <li>Choose your hero with the arrow button</li>
          <li>When your hero is selected press START</li>
          <li>Fight starts</li>
          <li>
            You can choose between 4 different attack types, each one deals
            different damages
          </li>
          <li>Some does more damages tham the others</li>
          <li>
            Be careful: The less stats you have, the less damage you will do
          </li>
          <li>Use your capacities carrefully</li>
          <li>Be quick, you have only 5 minutes left !</li>
        </ul>
      </div>
    </div>
  );
}

export default RulesModal;
