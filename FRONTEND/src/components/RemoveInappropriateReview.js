import React, { useState } from "react";
import { Button, Table, Modal, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Simulated data for inappropriate reviews
const dummyReviews = [
  { id: 1, reviewer: "John Doe", restaurant: "Pizza Hut", review: "Worst food ever! Very bad experience!" },
  { id: 2, reviewer: "Jane Smith", restaurant: "Sushi Bar", review: "Awful, don’t recommend it." },
  { id: 3, reviewer: "Alice Johnson", restaurant: "Burger King", review: "Disgusting! Never coming back." },
];

// Reusable Modal component for confirmation
const ConfirmationModal = ({ show, review, onClose, onConfirm }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm Removal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure you want to remove the following review?</p>
      <p><strong>{review?.review}</strong></p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
      <Button variant="danger" onClick={() => onConfirm(review?.id)}>Remove Review</Button>
    </Modal.Footer>
  </Modal>
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Inappropriate Reviews</h2>

        {/* Error message */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Reviews Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Reviewer</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Restaurant</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Review</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className="border-t">
                  <td className="px-6 py-4 text-gray-800">{review.reviewer}</td>
                  <td className="px-6 py-4 text-gray-800">{review.restaurant}</td>
                  <td className="px-6 py-4 text-gray-800">{review.review}</td>
                  <td className="px-6 py-4 flex justify-center space-x-4">
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
