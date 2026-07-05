import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL, MENU_CDN_URL } from "../utils/constant";
import mockMenu from "../utils/mockMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        console.log("Restaurant Menu:", mockMenu?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setRestaurantMenu(mockMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    };

    if(restaurantMenu === null) {
        return <Shimmer />
    }

    return (
        <div className="restaurant-menu">
            {
                restaurantMenu && restaurantMenu.map((item) => (
                    <div className="menu-item" key={item?.card?.info?.id}>
                        <div>
                            <img src={item?.card?.info?.imageId ? MENU_CDN_URL + item?.card?.info?.imageId : "https://via.placeholder.com/150"} alt={item?.card?.info?.name} />
                        </div>
                        <div>
                            <h2>{item?.card?.info?.name}</h2>
                            <p>Price: ₹{item?.card?.info?.defaultPrice / 100}</p>
                            <p>Rating: {item?.card?.info?.ratings?.aggregatedRating?.rating} ⭐</p>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        
                    </div>
                ))
            }
            
        </div>
    )
}

export default RestaurantMenu;