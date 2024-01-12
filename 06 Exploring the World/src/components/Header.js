import logoImage from "../../images/logo.jpeg";
import { useState } from "react";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  console.log("Header Render")

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
          <li>
            <button className="login-btn" onClick={() => {
              return BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{BtnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
