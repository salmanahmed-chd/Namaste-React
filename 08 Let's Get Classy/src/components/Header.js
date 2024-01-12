import logoImage from "../../images/logo.jpeg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  // useEffect without any dependency array -> it is called after each Render
  // useEffect(() => {
  //   console.log("useEffect is called")
  // })

  // useEffect a dependency array -> it is called only after initial render
  // useEffect(() => {
  //   console.log("useEffect is called")
  // }, [])

  // useEffect a dependency array -> it is called when there is change in dependency
  // useEffect(() => {
  //   console.log("useEffect is called")
  // }, [BtnName])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoImage} alt="SavorSpot" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                return BtnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {BtnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
