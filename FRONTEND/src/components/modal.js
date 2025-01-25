import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    day: "",
    time: "",
    "2 sitting": 0,
    "4 sitting": 0,
    "6 sitting": 0,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Booking Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="day"
                className="block text-sm font-medium text-gray-700"
              >
                Day
              </label>
              <input
                type="text"
                id="day"
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="2 sitting"
                  className="block text-sm font-medium text-gray-700"
                >
                  2 Sitting
                </label>
                <input
                  type="number"
                  id="2 sitting"
                  name="2 sitting"
                  value={formData["2 sitting"]}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  min="0"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="4 sitting"
                  className="block text-sm font-medium text-gray-700"
                >
                  4 Sitting
                </label>
                <input
                  type="number"
                  id="4 sitting"
                  name="4 sitting"
                  value={formData["4 sitting"]}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  min="0"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="6 sitting"
                  className="block text-sm font-medium text-gray-700"
                >
                  6 Sitting
                </label>
                <input
                  type="number"
                  id="6 sitting"
                  name="6 sitting"
                  value={formData["6 sitting"]}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  min="0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
