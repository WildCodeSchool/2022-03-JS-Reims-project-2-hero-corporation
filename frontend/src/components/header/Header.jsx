import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <img
        src="/src/assets/images/HC-logo.png"
        alt="Hero Corporation Logo "
        className="HC-Logo"
      ></img>
      <NavBar />
    </header>
  );
}

export default Header;
