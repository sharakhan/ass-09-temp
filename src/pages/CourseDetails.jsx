import { useLoaderData, useParams } from "react-router";
// import { toast } from "react-toastify";
import { useState } from "react";
// import { get, set } from "../localStorage/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaStar } from "react-icons/fa";
import useFetch from "../hook/useFetch";
import BookForm from "../Components/BookForm";

const CourseDetails = () => {
  const { data, loading, error } = useFetch();
  const params = useParams();
  const id = Number(params.skillId);
  const match = data.find((d) => d.id === id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // if (!match) {
  //   return <AppNotFound />;
  // }

  console.log(match)



  //  <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-300 pb-8">

  //  <div className="w-full sm:w-1/2">
  //    <img className="w-full rounded-lg" src={image} alt={image} />
  //  </div>
  //   <div className="flex flex-col sm:w-1/2">
  //     <h2 className="text-3xl font-bold mb-2">{skillName}</h2>
  //    <p className="text-gray-600 mb-4">{description}</p>
  //     <p className="font-semibold mb-2">
  //     Instructor: <span className="text-green-700">{providerName}</span>
  //     </p>
  //     <p className="text-xl font-medium text-green-600 mb-2">${price}</p>
  //    <p className="text-yellow-500 font-semibold mb-4">⭐ {rating}</p>

  //   <button
  //       onClick={handleEnroll} 
  //      className="btn text-white bg-green-600 hover:bg-green-700 text-lg"
  //     >
  //       {exist ? "Enrolled" : "Enroll Now"}
  //    </button>
  //   </div>
  // </div>





  
  return (
    <div className="max-w-4xl mx-auto p-5 md:p-10">
      {/* Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-6">
        <img
          src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53"
          alt="Course"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title / Info Section */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Learn Al-Qur'an with Tajweed
        </h1>

        <p className="text-lg text-gray-700">
          <span className="font-semibold">Instructor:</span> Sheikh Abdullah
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-green-600">$29 / Month</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-400" />
            <span className="ml-2 text-gray-700 text-sm">
              4.0 (120 Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 p-5 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-7">
          This course is specially designed for beginners to learn the Quran with
          correct pronunciation and Tajweed. You will start from the basics of
          Arabic letters, join letters, and gradually learn how to recite with
          fluency and proper rules. Classes will be interactive, including
          practice sessions, assignments, and self-check recitation tasks.
        </p>
      </div>

      <BookForm/>
    </div>
  );
};

export default CourseDetails;
