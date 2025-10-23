import React from 'react';

const Profile = () => {
    return (
        <div>
            Profile page..
            <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <Link
        to="/login"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </div>
        </div>
    );
};

export default Profile;