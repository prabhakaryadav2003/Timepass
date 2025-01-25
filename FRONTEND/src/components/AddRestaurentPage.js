import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddRestaurant.css"; // Custom CSS for styling

// Timeline Component
function Timeline({ currentStep }) {
  const steps = [
    "Restaurant Information",
    "Menu & Operational Data",
    "Table Data",
    "Payment Details",
  ];
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`timeline-step ${currentStep === index ? "active" : ""}`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-title">{step}</div>
        </div>
      ))}
    </div>
  );
}

// Step 1: Restaurant Information Component

function RestaurantInformation() {
  const [restaurantName, setRestaurantName] = useState('');
  const [ownerFirstName, setOwnerFirstName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [restaurantEmail, setRestaurantEmail] = useState('');
  const [restaurantPhone, setRestaurantPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate fields
    if (!restaurantName || !ownerFirstName || !ownerLastName || !ownerPhone || !restaurantEmail || !restaurantPhone) {
      setError('Please fill in all fields');
      return;
    }

    // Mock API call or further processing
    console.log('Restaurant Information Submitted');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Restaurant Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Restaurant Name */}
          <div className="mb-4">
            <label htmlFor="restaurantName" className="block text-gray-700 font-medium mb-2">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            />
          </div>

          {/* Owner's First Name */}
          <div className="mb-4">
            <label htmlFor="ownerFirstName" className="block text-gray-700 font-medium mb-2">Owner First Name</label>
            <input
              type="text"
              id="ownerFirstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={ownerFirstName}
              onChange={(e) => setOwnerFirstName(e.target.value)}
              required
            />
          </div>

          {/* Owner's Last Name */}
          <div className="mb-4">
            <label htmlFor="ownerLastName" className="block text-gray-700 font-medium mb-2">Owner Last Name</label>
            <input
              type="text"
              id="ownerLastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={ownerLastName}
              onChange={(e) => setOwnerLastName(e.target.value)}
              required
            />
          </div>

          {/* Owner's Phone Number */}
          <div className="mb-4">
            <label htmlFor="ownerPhone" className="block text-gray-700 font-medium mb-2">Owner's Phone Number</label>
            <input
              type="text"
              id="ownerPhone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
              required
            />
          </div>

          {/* Restaurant Email */}
          <div className="mb-4">
            <label htmlFor="restaurantEmail" className="block text-gray-700 font-medium mb-2">Restaurant Email</label>
            <input
              type="email"
              id="restaurantEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={restaurantEmail}
              onChange={(e) => setRestaurantEmail(e.target.value)}
              required
            />
          </div>

          {/* Restaurant Phone Number */}
          <div className="mb-4">
            <label htmlFor="restaurantPhone" className="block text-gray-700 font-medium mb-2">Restaurant Phone Number</label>
            <input
              type="text"
              id="restaurantPhone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={restaurantPhone}
              onChange={(e) => setRestaurantPhone(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Information
          </button>
        </form>
      </div>
    </div>
  );
}

// Step 2: Menu & Operational Data Component
function MenuOperationalData({ nextStep, prevStep }) {
  return (
    <div className="step-content">
      <h3>Menu & Operational Data</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Add Restaurant Images</label>
          <input type="file" className="form-control" multiple />
        </div>
        <div className="mb-3">
          <label className="form-label">Add Food Images</label>
          <input type="file" className="form-control" multiple />
        </div>
        <div className="mb-3">
          <label className="form-label">Cuisines</label>
          <select className="form-control" multiple>
            <option>Italian</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Mexican</option>
            <option>Thai</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Dining Timings</label>
          <div className="row">
            <div className="col">
              <input type="time" className="form-control" />
            </div>
            <div className="col">
              <input type="time" className="form-control" />
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="btn btn-primary" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
}

// Step 3: Table Data Component
function TableData({ nextStep, prevStep }) {
  return (
    <div className="step-content">
      <h3>Table Data</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">2 Seat Tables Quantity</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">4 Seat Tables Quantity</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">6 Seat Tables Quantity</label>
          <input type="number" className="form-control" />
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="btn btn-primary" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
}

// Step 4: Payment Details Component
function PaymentDetails({ prevStep }) {
  return (
    <div className="step-content">
      <h3>Payment Details</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">IFSC Code</label>
          <input type="text" className="form-control" />
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
          Previous
        </button>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

// Main AddRestaurant Component
function AddRestaurant() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <RestaurantInformation nextStep={nextStep} />;
      case 1:
        return <MenuOperationalData nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <TableData nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <PaymentDetails prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="add-restaurant-container d-flex">
      <div className="timeline-container">
        <Timeline currentStep={currentStep} />
      </div>
      <div className="content-container flex-grow-1">
        {renderStep()}
      </div>
    </div>
  );
}

export default AddRestaurant;
