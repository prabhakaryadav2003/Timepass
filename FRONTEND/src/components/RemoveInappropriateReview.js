import React, { useState } from "react";
import PropTypes from "prop-types";

// Simulated data for inappropriate reviews
const dummyReviews = [
  {
    id: 1,
    reviewer: "John Doe",
    restaurant: "Pizza Hut",
    review: "Worst food ever! Very bad experience!",
  },
  {
    id: 2,
    reviewer: "Jane Smith",
    restaurant: "Sushi Bar",
    review: "Awful, don’t recommend it.",
  },
  {
    id: 3,
    reviewer: "Alice Johnson",
    restaurant: "Burger King",
    review: "Disgusting! Never coming back.",
  },
];

// Reusable Modal component for confirmation
const ConfirmationModal = ({ show, review, onClose, onConfirm }) => (
  <div
    className={`fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center ${
      show ? "block" : "hidden"
    }`}
  >
    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
      <h3 className="text-xl font-semibold mb-4">Confirm Removal</h3>
      <p className="mb-4">
        Are you sure you want to remove the following review?
      </p>
      <p className="font-medium text-gray-800 mb-4">
        <strong>{review?.review}</strong>
      </p>
      <div className="flex justify-between">
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Close
        </button>
        <button
          onClick={() => onConfirm(review?.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Remove Review
        </button>
      </div>
    </div>
  </div>
);

ConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  review: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

const RemoveInappropriateReviews = () => {
  const [reviews, setReviews] = useState(dummyReviews);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [error, setError] = useState(null);

  const handleRemoveReview = (reviewId) => {
    try {
      const updatedReviews = reviews.filter((review) => review.id !== reviewId);
      setReviews(updatedReviews);
      setShowModal(false);
      setError(null);
    } catch (err) {
      setError("Error occurred while removing the review. Please try again.");
    }
  };

  const handleShowModal = (review) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Inappropriate Reviews
        </h2>

        {/* Error message */}
        {error && (
          <div className="bg-red-500 text-white p-4 mb-6 rounded-lg">
            {error}
          </div>
        )}

        {/* Reviews Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">
                  Reviewer
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">
                  Restaurant
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">
                  Review
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className="border-t">
                  <td className="px-6 py-4 text-gray-800">{review.reviewer}</td>
                  <td className="px-6 py-4 text-gray-800">
                    {review.restaurant}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{review.review}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleShowModal(review)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        show={showModal}
        review={selectedReview}
        onClose={handleCloseModal}
        onConfirm={handleRemoveReview}
      />
    </div>
  );
};

export default RemoveInappropriateReviews;
