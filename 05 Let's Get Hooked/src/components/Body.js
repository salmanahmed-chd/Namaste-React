import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  // Local State Variable

  const [restaurantList, setRestaurantList] = useState(RestaurantList);
 
  return (
    <div className="body">
      <div className="search-bar">Search...</div>

      <div className="filter">
        <button className="filter-btn" onClick = {
          () => {
            const filteredList = restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.3);
            setRestaurantList(filteredList);
          }
        }>Top Rated Restaurant</button>
      </div>

      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;