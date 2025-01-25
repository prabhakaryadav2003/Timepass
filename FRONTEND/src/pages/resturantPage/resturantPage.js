import React, { useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import Loader from "../../components/loading";
import Carousel from "../../components/carousel/carousel";

import imageData from "../../components/carousel/imageData";

import Cusines from "../../components/cusines/cusines";
import cusinesData from "../../components/cusines/data";

import RestaurantCard from "../../components/resturantCardInfo";
import Amenities from "../../components/amenites";
import Map from "../../components/map/map";

import Address from "../../components/address";

import { GlobalGlobalContext } from "../../components/context";
import Modal from "../../components/modal";

const ResturantPage = () => {
  const [loading, setLoading] = useState(true);
  const { isModelOpen, setIsModelOpen } = GlobalGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col h-full w-full items-center">
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Carousel autoSlide={true}>
          {imageData.map((source, index) => (
            <div
              key={index}
              className="w-[95vw] h-full flex-shrink-0 flex items-center justify-center z-1 mt-[5.5rem] overflow-hidden"
            >
              <img
                src={source}
                alt={`carousel-image-${index}`}
                className="object-cover h-[38rem] w-full rounded-3xl"
              />
            </div>
          ))}
        </Carousel>
      )}
      <div className="flex flex-wrap lg:flex-nowrap w-full max-w-[95%] mt-8">
        {/* Left Section */}
        <div className="flex-1 border border-none p-4 space-y-6">
          <Amenities />

          <div className="cusines">
            <Cusines cusines={cusinesData} />
          </div>

          <div className="location border p-4 rounded-xl bg-gray-100 shadow-md flex items-center gap-4">
            <div className="flex items-center justify-center bg-blue-500 text-white h-12 w-12 rounded-full">
              🕒
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Opening Hours
              </h3>
              <p className="text-gray-700 font-medium">
                <span className="font-semibold">9:00 AM - 10:00 PM</span>
              </p>
            </div>
          </div>
          <div className="border border-none flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4 mt-6">
            <div className="lg:w-1/3 w-full border rounded-xl bg-white">
              <Address
                shopNumber="101"
                floorTower="2nd Floor, Tower A"
                area="Downtown Avenue"
                city="Mumbai"
                landmark="Central Park"
              />
            </div>

            <div className="lg:flex-1 w-full border rounded-xl">
              <Map />
            </div>
          </div>
        </div>
        <Modal isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} />

        {/* Right Section */}
        <div className="flex-1 lg:max-w-sm border border-none m-4">
          <div className="bg-gray-100">
            <RestaurantCard
              name="Delicious Bites"
              owner="Jane Smith"
              description="A cozy place to enjoy mouth-watering dishes."
              phone="+1 987 654 3210"
              rating={4.8}
              email={"random@gmail.com"}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResturantPage;
