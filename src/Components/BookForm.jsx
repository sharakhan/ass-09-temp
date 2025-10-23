import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("✅ Session booked successfully!");

    // Clear form
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Book a Session
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Submit
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default BookForm;
