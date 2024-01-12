import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="biryani" />
      <div className="res-data">
        <h3>{name}</h3>
        <h5 style={{ color: "rgba(2, 6, 12, 0.6)" }}>{cuisines.join(", ")}</h5>
        <h5>
          {avgRating} ⭐ • {resData.info.sla.deliveryTime} mins
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
