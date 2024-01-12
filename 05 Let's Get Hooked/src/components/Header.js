import logoImage from "../../images/logo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoImage} alt="SavorSpot" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;