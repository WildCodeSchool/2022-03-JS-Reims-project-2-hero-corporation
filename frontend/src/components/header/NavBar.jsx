import { Link } from "react-router-dom";
import { useModal } from "react-hooks-use-modal";
import RulesModal from "../RulesModal";

function NavBar() {
  const [Modal, open] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  return (
    <>
      <nav>
        <Link to="/">
          <img
            src="/src/assets/images/HC-logo.png"
            alt="Hero Corporation Logo "
            className="hclogo"
          />
        </Link>
        <button type="button" className="rule" onClick={open}>
          ?
        </button>
      </nav>
      <Modal>
        <RulesModal />
      </Modal>
    </>
  );
}

export default NavBar;
