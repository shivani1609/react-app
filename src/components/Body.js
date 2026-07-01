import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";

const Body = () =>  (
    <div className="body">
        <div className="search">
            search
        </div>
        <div className="restaurant-list">
            {
                restaurantsList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
            }
        </div>
    </div>
);

export default Body;