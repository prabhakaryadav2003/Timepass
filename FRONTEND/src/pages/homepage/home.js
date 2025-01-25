import React from 'react';
// import Header from './components/Header';
import SearchBar from '../../components/SearchBar';
import RestaurantCategories from '../../components/RestaurantCategories';
import FeaturedRestaurants from '../../components/featuredRestaurants/FeaturedRestaurants';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';

import restaurantsData from '../../components/featuredRestaurants/data'

function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <SearchBar />
      <RestaurantCategories />
      <FeaturedRestaurants restaurants = {restaurantsData}/>
      <Footer />
    </div>
  );
}

export default Home;
