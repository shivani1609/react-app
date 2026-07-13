import { MENU_CDN_URL } from "../utils/constant";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
    const { title, itemCards } = category?.card?.card || {};
  console.log("Category restaurant:", category);
    return (
      <div className="w-6/12 justify-center flex items-center flex-col">
        <div className="flex justify-between m-4 p-4 w-12/12 font-bold bg-gray-200 shadow-gray-400 border-b border-gray-300 rounded-md">
            <h3 className="category-title">{title} ({category?.card?.card?.itemCards?.length})</h3>
            <span>⌄</span>
        </div>
        
        <ItemList items={itemCards} />
      </div>
    );
  }

  export default RestaurantCategory;