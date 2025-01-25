import React from 'react';

function UserProfile() {
  const user = {
    image: 'https://via.placeholder.com/150', // Placeholder image URL
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
  };

  const handleEditProfile = () => {
    console.log('Edit Profile Clicked');
    // Logic to navigate to the edit profile page can be added here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.image}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* User Details */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> {user.phone}
          </p>
        </div>

        {/* Edit Profile Button */}
        <div className="text-center">
          <button
            onClick={handleEditProfile}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
