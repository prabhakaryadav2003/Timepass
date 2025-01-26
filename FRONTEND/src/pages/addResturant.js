import React, { useState } from "react";
import Navbar from "../components/NavBar";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    isVeg: true,
    phone: "",
    description: "",
    restaurantImage: "", // Changed from null to "" since it's a URL
    openTime: "",
    closeTime: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value, // Handling file inputs (if required)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      name: formData.name,
      is_veg: formData.isVeg,
      phone: formData.phone,
      description: formData.description,
      open_time: formData.openTime,
      close_time: formData.closeTime,
      restaurantImage: formData.restaurantImage, // Send the image URL
    };

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://192.168.22.92:8000/api/restaurants/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formDataToSend), // Send the JSON with the image URL
      });

      if (response.ok) {
        console.log("Restaurant added successfully!");
      } else {
        console.error("Failed to add restaurant:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <Navbar />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Restaurant</h2>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter restaurant name"
            required
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Is Vegetarian?</label>
          <input
            type="checkbox"
            name="isVeg"
            checked={formData.isVeg}
            onChange={() =>
              setFormData((prevData) => ({
                ...prevData,
                isVeg: !prevData.isVeg,
              }))
            }
            className="h-5 w-5 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter restaurant description"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Restaurant Image URL</label>
          <input
            type="text"
            name="restaurantImage"
            value={formData.restaurantImage} // Bind the value here
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Open Time</label>
          <input
            type="time"
            name="openTime"
            value={formData.openTime}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2">Close Time</label>
          <input
            type="time"
            name="closeTime"
            value={formData.closeTime}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-full w-full sm:w-auto mt-4 hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantForm;
