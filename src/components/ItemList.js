import { MENU_CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    return (
        <div>
            {items && items.map((item) => (
                <div className="flex gap-5 border-gray-300 border-b mt-5 pb-5" key={item?.card?.info?.id}>
                    
                    <div>
                        <h2 className="font-bold text-xl">{item?.card?.info?.name}</h2>
                        <p className="font-bold">Price: ₹{item?.card?.info?.defaultPrice / 100}</p>
                        <p>Rating: {item?.card?.info?.ratings?.aggregatedRating?.rating} ⭐</p>           
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="min-w-40 h-36" src={item?.card?.info?.imageId ? MENU_CDN_URL + item?.card?.info?.imageId : "https://via.placeholder.com/150"} alt={item?.card?.info?.name} />
                        <button className="border border-gray-300 text-green-500 px-4 py-2 rounded mt-2">ADD</button>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ItemList;