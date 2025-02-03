import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import FeaturedRestaurants from "../../components/featuredRestaurants/FeaturedRestaurants";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import Loader from "../../components/loading";
import { GlobalGlobalContext } from "../../components/context";

function Home() {
  const [loading, setLoading] = useState(true);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { searchInput, setResData } = GlobalGlobalContext();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/restaurants/"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setResData(data);
          const formattedData = data.map((restaurant) => ({
            id: restaurant.id,
            name: restaurant.name,
            isVeg: restaurant.is_veg,
            phone: restaurant.phone,
            description: restaurant.description,
            restaurantImage: restaurant.restaurant_image_url,
            openTime: restaurant.open_time,
            closeTime: restaurant.close_time,
          }));
          setRestaurantsData(formattedData);
          setFilteredRestaurants(formattedData);
        } else {
          console.error("Failed to fetch restaurants:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const filtered = restaurantsData.filter((restaurant) => {
      const name = restaurant.name?.toLowerCase() || "";
      const description = restaurant.description?.toLowerCase() || "";
      const phone = restaurant.phone?.toLowerCase() || "";
      const search = searchInput?.toLowerCase() || "";

      return (
        name.includes(search) ||
        description.includes(search) ||
        phone.includes(search)
      );
    });
    setFilteredRestaurants(filtered);
  }, [searchInput, restaurantsData]);

  return (
    <div className="flex flex-col border border-black h-full w-full p-0">
      <Navbar />
      <SearchBar />
      <div className="flex flex-col items-center w-full p-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Featured Restaurants
        </h2>
        <div className="w-full">
          {loading ? (
            <Loader />
          ) : (
            <FeaturedRestaurants restaurants={filteredRestaurants} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
