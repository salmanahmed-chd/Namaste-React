import Shimmer from "./Shimmer";
import CardItem from "./CardItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <Offline />;
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemData =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;

  return (
    <div className="w-3/5 mx-auto my-10 p-2">
      <div className="flex justify-between my-4">
        <div>
          <h2 className="font-bold my-2 text-2xl">{name}</h2>
          <p className="text-slate-600 font-medium text-md">{cuisines.join(", ")}</p>
        </div>
        <div className="flex-col justify-between items-center shadow-md p-2 m-2 rounded-md ">
          <h4 className="m-2 font-bold">⭐ {avgRating}</h4>
          <hr></hr>
          <p className="text-xs my-1 font-medium">{totalRatingsString}</p>
        </div>
      </div>

      <div>
        <hr className="my-5"></hr>
      </div>

      <div className="w-1/4 flex justify-between my-4 font-medium">
        <div className="flex">
          <i className="ri-timer-2-fill pr-2"></i>
          <h5>
            {resInfo?.cards[0]?.card?.card?.info?.sla.deliveryTime + " MIN"}
          </h5>
        </div>

        <div className="flex">
          <i className="ri-money-rupee-circle-line px-2"></i>
          <h5>{costForTwoMessage}</h5>
        </div>
      </div>

      <div>
        <hr className="mb-12"></hr>
      </div>

      <div className="mt-20">
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
