import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

const Body = () =>  {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurantsList.filter((restaurant) => restaurant.info.avgRating > 4);
                    setListOfRestaurants(filteredList); 
                    console.log("Original List:", restaurantsList);
                    console.log("Filtered List:", filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-list">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;