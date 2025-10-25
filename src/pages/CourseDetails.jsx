import { useParams } from "react-router";

import { FaStar } from "react-icons/fa";
import useFetch from "../hook/useFetch";
import BookForm from "../Components/BookForm";

const CourseDetails = () => {
  const { data, loading, error } = useFetch();
  const params = useParams();
  const id = Number(params.skillId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  


  const match = data.find((d) => d.skillId === id);

  if (!match) {
    return <span>not match</span>
  }

  const {image,skillName,providerName,price,rating,description} = match

  return (
    <div className="max-w-4xl mx-auto p-5 md:p-10 bg-black">
      {/* Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-6">
        <img
          src={image}
          alt="Course"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title / Info Section */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
         {skillName}
        </h1>

        <p className="text-lg text-gray-700">
          <span className="font-semibold">Instructor:</span> {providerName}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-green-600"> ${price} / Month</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-400" />
            <span className="ml-2 text-gray-700 text-sm">
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 p-5 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-7">
          {description}
        </p>
      </div>
      <BookForm/>
    </div>
  );
};

export default CourseDetails;