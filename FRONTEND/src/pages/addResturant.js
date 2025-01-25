import React, { useState } from "react";
import RestaurantInformation from "../components/RestaurantInformation";
import RestaurantLocationDetails from "../components/RestaurantLocationDetails";
import MenuDetails from "../components/MenuDetails";
import TableDetails from "../components/TableDetails";
import PaymentDetails from "../components/PaymentDetails";

import Navbar from "../components/NavBar";

const AddRestaurant = () => {
  const [step, setStep] = useState(1); // To track the current step in the form
  const [formData, setFormData] = useState({
    restaurantInfo: false,
    locationDetails: false,
    menuDetails: false,
    tableDetails: false,
    paymentDetails: false,
  });

  const handleNext = () => {
    console.log("sub hua");
    setStep((prev) => prev + 1); // Move to the next step
  };

  const handleFormSubmit = (formName, data) => {
    setFormData((prev) => ({
      ...prev,
      [formName]: data,
    }));
    handleNext();
  };

  const progressPercentage = (step / 5) * 100;

  const steps = [
    "Restaurant Info",
    "Location Details",
    "Menu Details and all"
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />

      <div className="relative h-1 bg-gray-300 mx-4">
        <div
          className="absolute top-0 left-0 h-1 bg-blue-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex flex-col w-full p-4">
        <div className="mt-4">
          {step === 1 && (
            <RestaurantInformation
              onSubmit={(data) => handleFormSubmit("restaurantInfo", data)}
            />
          )}
          {step === 2 && (
            <RestaurantLocationDetails
              onSubmit={(data) => handleFormSubmit("locationDetails", data)}
            />
          )}
          {step === 3 && (
            <div className="border border-black">
              <MenuDetails
                onSubmit={(data) => handleFormSubmit("menuDetails", data)}
              />
              <TableDetails
                onSubmit={(data) => handleFormSubmit("tableDetails", data)}
              />
              <PaymentDetails
                onSubmit={(data) => handleFormSubmit("paymentDetails", data)}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center px-4 py-4">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index + 1 <= step ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  index + 1 <= step ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
