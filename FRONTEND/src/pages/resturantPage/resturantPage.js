import React, { useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import Loader from "../../components/loading";
import Carousel from "../../components/carousel/carousel";

import imageData from "../../components/carousel/imageData";

import RestaurantCard from "../../components/resturantCardInfo";
import Amenities from "../../components/amenites";
import CommentsSection from "../../components/commentSection/comments";

import commentsData from "../../components/commentSection/data";

const ResturantPage = () => {
  const [loading, setLoading] = useState(true);

  const comments = [
    { name: "John Doe", comment: "The food was amazing, highly recommend!" },
    { name: "Jane Smith", comment: "Lovely ambiance and great service." },
    { name: "Alex Brown", comment: "The desserts here are to die for!" },
  ];

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
      <div className="flex flex-row w-full m-auto w-full max-w-[95%] mt-[2rem]">
        <div className="bottom border border-none w-full m-4">
          <Amenities />
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
          </div>
          <div className="address border border-none p-4 rounded-xl bg-gray-100 shadow-md flex items-start gap-4 mt-[2rem]">
            <div className="flex items-center justify-center bg-green-500 text-white h-12 w-12 rounded-full">
              📍
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Address
              </h3>
              <p className="text-gray-700 font-medium">
                123 Flavor Street, Foodie Town, FL 56789
              </p>
            </div>
          </div>
          <div className="map border border-none"></div>

          <div className="comments border border-none p-4 rounded-xl bg-gray-100 shadow-md mt-[2rem]">
            <CommentsSection  comments={commentsData}/>
          </div>
        </div>
        <div className="review border border-none m-4">
          <div className="bg-gray-100">
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
