import React, { useState } from 'react';

function RatingsReviews() {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    { name: "John Doe", comment: "Great food and ambiance!", rating: 4 },
    { name: "Jane Smith", comment: "Amazing service and delicious food!", rating: 5 }
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (rating && review) {
      setReviews([...reviews, { name: "Anonymous", comment: review, rating: parseInt(rating) }]);
      setReview("");
      setRating("");
    }
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ratings & Reviews</h2>

      {/* Review Submission */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Review this Restaurant</h4>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-lg text-gray-700">Rating</label>
            <select
              id="rating"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="review" className="block text-lg text-gray-700">Comment</label>
            <textarea
              id="review"
              rows="4"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Displaying Reviews */}
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Reviews:</h4>
        {reviews.map((rev, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-800">{rev.name}</p>
            <p className="text-gray-600 mb-2">{rev.comment}</p>
            <p className="text-yellow-500">
              {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingsReviews;
