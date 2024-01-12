import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo; // Move return statement outside of the fetchMenu function
};

export default useRestaurantMenu;
