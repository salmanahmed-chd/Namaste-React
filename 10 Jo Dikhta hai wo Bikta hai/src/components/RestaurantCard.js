import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="w-60 flex-col items-center shadow-md bg-slate-100 mx-2 my-4">
      <img src={CDN_URL + cloudinaryImageId} alt="biryani" className="p-3" />
      <div className="m-3 p-3">
        <h3 className="my-1 font-bold">{name}</h3>
        <h5 className="text-slate-600 my-2 font-medium text-sm">{cuisines.join(", ")}</h5>
        <h5 className="font-semibold">
          {avgRating} ⭐ • {resData.info.sla.deliveryTime} mins
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
