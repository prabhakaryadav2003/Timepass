import React, { useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import Loader from "../../components/loading";
import Carousel from "../../components/carousel/carousel";

import imageData from "../../components/carousel/imageData";
import non_veg from "../../assets/non_veg.png";
import veg from "../../assets/veg.png";
import wifi from "../../assets/wifi.png";
import air_conditioner from "../../assets/air_conditioner.png";

import RestaurantCard from "../../components/resturantCardInfo";
import Amenities from "../../components/amenites";

const ResturantPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("hora hai");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col none-black h-full w-full p-0 items-center justify-center">
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Carousel autoSlide={true}>
          {imageData.map((source, index) => (
            <div
              key={index}
              className="w-[95vw] h-full phone-height-carousel flex-shrink-0 flex items-center justify-center z-1 mt-[5.5rem] none-black overflow-hidden make_reponsive"
            >
              <img
                src={source}
                alt={`carousel-image-${index}`}
                className="object-cover h-[38rem] w-full rounded-3xl z-1"
              />
            </div>
          ))}
        </Carousel>
      )}
      <div className="flex flex-row w-full m-auto w-full max-w-[95%] mt-[2rem] ">
        <div className="bottom border border-none w-full m-4">
          <Amenities
            nonVeg={non_veg}
            veg={veg}
            wifi={wifi}
            airConditioner={air_conditioner}
          />
          <div className="location border border-none p-4 rounded-xl bg-gray-100 shadow-md flex items-center gap-4 mt-[2rem]">
            <div className="flex items-center justify-center bg-blue-500 text-white h-12 w-12 rounded-full">
              🕒
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Opening Hours
              </h3>
              <p className="text-gray-700 font-medium">
                <span className="font-semibold">9:00 AM - 10:00 PM</span>
              </p>
            </div>
          </div>{" "}
          <div className="map border border-none"></div>
          <div className="information border border-none"></div>
        </div>
        <div className="review border border-none m-4 ">
          <div className=" bg-gray-100">
            <RestaurantCard
              name="Delicious Bites"
              owner="Jane Smith"
              description="A cozy place to enjoy mouth-watering dishes."
              phone="+1 987 654 3210"
              rating={4.8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantPage;
