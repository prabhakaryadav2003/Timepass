import React from "react";
// import Header from './components/Header';
import SearchBar from "../../components/SearchBar";
import RestaurantCategories from "../../components/cusines/cusines";
import FeaturedRestaurants from "../../components/featuredRestaurants/FeaturedRestaurants";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

import restaurantsData from "../../components/featuredRestaurants/data";
import cusinesData from "../../components/cusines/data"

function Home() {
  return (
    <div className="flex flex-col border border-black h-full w-full p-0">
      <Navbar />
      <SearchBar />
      <RestaurantCategories categories={cusinesData}/>
      <FeaturedRestaurants restaurants={restaurantsData} />
      <Footer />
    </div>
  );
}

export default Home;
