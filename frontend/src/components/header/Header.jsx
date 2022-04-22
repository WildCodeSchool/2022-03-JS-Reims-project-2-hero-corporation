import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <img
        src="/src/assets/images/HC-logo.png"
        alt="Hero Corporation Logo "
        className="hclogo"
      />
      <NavBar />
    </header>
  );
}

export default Header;
