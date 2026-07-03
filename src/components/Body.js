import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>  {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(listOfRestaurants.length === 0) {
        return <Shimmer />
    }

    if(filteredRestaurants.length === 0) {
        return (
            <div className="no-results">
                <h2>No restaurants found matching your search.</h2>
                <button className="clear-btn" onClick={() => { setSearchText(""); fetchData(); }}>Clear</button>
            </div>
        );
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" placeholder="Search for restaurants..." value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="search-btn" 
                        onClick={() => { 
                            const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredList);
                        }}>  
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4);
                    setListOfRestaurants(filteredList); 
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants?.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;