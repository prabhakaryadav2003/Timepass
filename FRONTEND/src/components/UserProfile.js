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
    <div className="flex justify-center items-center bg-gray-100 pt-24">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 flex items-center space-x-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={user.image}
            alt="User Avatar"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl"
          />
        </div>

        {/* User Details */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-semibold text-gray-800">{user.name}</h2>
          <div className="space-y-2">
            <p className="text-lg text-gray-600">
              <span className="font-medium text-gray-800">Email:</span> {user.email}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium text-gray-800">Phone:</span> {user.phone}
            </p>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleEditProfile}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-40"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
