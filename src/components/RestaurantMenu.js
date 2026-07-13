import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL, MENU_CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log("resInfo:", resInfo);
    console.log("Restaurant ID:", resId);

    
    if(resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
    const restaurantMenu = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => 
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("Categories:", categories);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold mt-5 text-2xl">{ name }  </h1>
            <p  className="font-bold">{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            {
                categories.map((category) => {
                    return (
                        <RestaurantCategory key={category?.card?.card?.title} category={category} />
                    );
                })
            }



            {/* {
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
            } */}
        </div>
    )
}

export default RestaurantMenu;