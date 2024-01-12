import logoImage from "../../images/logo.png";
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
    <div className="flex justify-between pd-1 shadow-md m-1 items-center">
      <div>
        <img className="w-24" src={logoImage} alt="SavorSpot" />
      </div>

      <div>
        <ul className="flex gap-12 p-3 font-medium items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="px-6 py-3 rounded-md bg-blue-700 text-white"
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
