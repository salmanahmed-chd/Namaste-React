import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import CardItem from "./CardItem";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resID} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
  
    const json = await data.json();
  
    setResInfo(json?.data);
  };
  
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemData =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-name">
        <div className="res-menu-data">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="res-rating">
          <h4>⭐ {avgRating}</h4>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div>
        <hr className="hor-rule"></hr>
      </div>

      <div className="item-shipment">
        <div>
          <i className="ri-timer-2-fill"></i>
          <h5>
            {resInfo?.cards[0]?.card?.card?.info?.sla.deliveryTime + " MIN"}
          </h5>
        </div>

        <div>
          <i className="ri-money-rupee-circle-line"></i>
          <h5>{costForTwoMessage}</h5>
        </div>
      </div>

      <div>
        <hr className="hor-rule2"></hr>
      </div>

      <div className="item-container">
        <div className="item-container">
          {itemData.map((item) => {
            return <CardItem key={item.card.info.id} infoData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
