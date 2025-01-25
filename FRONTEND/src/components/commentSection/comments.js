import React from "react";

const CommentsSection = ({ comments }) => {
  return (
    <div className="comments border border-none mt-6 rounded-xl bg-gray-100 shadow-md">
      <div className="bg-green-500 text-white text-center font-semibold text-lg py-2 rounded-t-xl">
        Comments
      </div>
      <div className="p-4 space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="border-b pb-3">
            <h4 className="text-gray-800 font-semibold">{comment.name}</h4>
            <p className="text-gray-600">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
