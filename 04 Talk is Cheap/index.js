import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./images/logo.jpeg";

const apiData = require("./api_data.json"); 

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

const RestaurantList = apiData.restaurants;



const RestaurantCard = ({ resData }) => {

  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="biryani" />
      <div className="res-data">
        <h3>{name}</h3> 
        <h5 style={{ color: "rgba(2, 6, 12, 0.6)" }}>
          {cuisines.join(', ')}
        </h5>
        <h5>{avgRating} ⭐ • {resData.info.sla.deliveryTime} mins</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search...</div>
      <div className="res-container">

        {
          RestaurantList.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />)
        }
        
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
