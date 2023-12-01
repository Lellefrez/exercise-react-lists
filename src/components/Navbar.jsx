import "./Navbar.css";

const Navbar = ({ logoURL, navList }) => {
  const lista = navList.map((link, i) => (
    <li key={`navList${i}`}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

  return (
    <nav>
      <figure>
        <img src={logoURL} alt="Logo" />
      </figure>
      <menu>{lista}</menu>
    </nav>
  );
};

export default Navbar;
