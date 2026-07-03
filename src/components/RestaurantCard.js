import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = resData.info;

    return (
        <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <img className="restaurant-image" src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
            <h2 className="restaurant-name">{name}</h2>
            <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
            <p className="restaurant-rating">{avgRating} ⭐</p>
            <p className="restaurant-price"> {costForTwo}</p>
            <p className="restaurant-delivery-time">{sla.deliveryTime} mins </p>
        </div>
    )
} 

export default RestaurantCard;