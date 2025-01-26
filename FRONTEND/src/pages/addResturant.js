import React, { useState } from "react";
import RestaurantInformation from "../components/RestaurantInformation";
import RestaurantLocationDetails from "../components/RestaurantLocationDetails";
import MenuDetails from "../components/MenuDetails";
import TableDetails from "../components/TableDetails";
import PaymentDetails from "../components/PaymentDetails";
import Navbar from "../components/NavBar";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantInfo: false,
    locationDetails: false,
    menuDetails: false,
    tableDetails: false,
    paymentDetails: false,
  });

  const handleFormSubmit = (formName, data) => {
    setFormData((prev) => ({
      ...prev,
      [formName]: data,
    }));
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <div className="relative h-1 bg-gray-300 mx-4">
        <div
          className="absolute top-0 left-0 h-1 bg-blue-500"
          style={{ width: "100%" }}
        />
      </div>
      <div className="flex flex-col w-full p-4">
        <div className="mt-4">
          <RestaurantInformation onSubmit={(data) => handleFormSubmit("restaurantInfo", data)} />
          <RestaurantLocationDetails onSubmit={(data) => handleFormSubmit("locationDetails", data)} />
          <MenuDetails onSubmit={(data) => handleFormSubmit("menuDetails", data)} />
          {/* <TableDetails onSubmit={(data) => handleFormSubmit("tableDetails", data)} /> */}
          <PaymentDetails onSubmit={(data) => handleFormSubmit("paymentDetails", data)} />
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
