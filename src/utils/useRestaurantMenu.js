import { useEffect, useState } from "react";
import mockMenu from "../utils/mockMenu";

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        console.log("Restaurant Menu:", mockMenu?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setRestaurantMenu(mockMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return restaurantMenu;
};

export default useRestaurantMenu;