import React from "react";

const Profile = () => {
  
  const { displayName, email, photoURL, emailVerified, providerData } = user;
  console.log(user);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header Cover */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 h-32 relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.displayName}
          </h2>
          <p className="text-gray-500 mt-1">{user.email}</p>

          {/* User Info Card */}
          <div className="mt-6 space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <span className="font-medium text-gray-700">Account Status:</span>
              <span
                className={`font-semibold ${
                  user.emailVerified ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.emailVerified ? "Verified" : "Not Verified"}
              </span>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <span className="font-medium text-gray-700">Provider:</span>
              <span className="text-gray-600">{user.provider}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition">
              Edit Profile
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
