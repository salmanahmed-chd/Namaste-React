import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [initialRestaurantList, setInitialRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D30.7333148%26lng%3D76.7794179%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // Use optional Chaining

    const initialList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setInitialRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredRestaurant = initialRestaurantList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    console.log(filteredRestaurant);

    setRestaurantList(filteredRestaurant);
  };

  // Conditional Rendering
  // if(restaurantList.length === 0){
  //   return (
  //     <div className="shimmer-body">
  //       <Shimmer/>
  //     </div>
  //   )
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <Offline />;
  }

  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
