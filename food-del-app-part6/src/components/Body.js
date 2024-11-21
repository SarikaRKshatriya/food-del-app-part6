import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

// What is state
// what is React Hooks? - functions,
// What is useState

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//   );
//   return filterData;
// }
const Body = () => {
  //const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  //   const [restaurants, setListOfRestaurants] = useState(restaurantList);
  const [allRestaurants, setAllRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  //   useEffect(() => {
  //     // API call
  //     getRestaurants();
  //   }, []);
  //   async function getRestaurants() {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const json = await data.json();
  //     console.log(json);
  //     // Optional Chaining
  //     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  // }
  //   setAllRestaurants(restaurantList);
  //   setFilteredRestaurants(restaurantList);

  //console.log("render");
  // not render component (Early return)
  if (!allRestaurants) return null;
  if (filteredRestaurants?.length === 0)
    return <h1>No Restraunt match your Filter!!</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="sp-5 bg-pink-50 my-5 flex place-items-center justify-between">
        <div>
          <input
            type="text"
            className="focus:bg-green-200 p-2 m-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
            onClick={() => {
              //need to filter the data
              const data = filterData(searchText, allRestaurants);
              // update the state - restaurants
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
            onClick={() => {
              const filteredList = allRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
