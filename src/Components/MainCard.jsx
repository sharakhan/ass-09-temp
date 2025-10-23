import { Link } from "react-router";

const MainCard = ({ data }) => {
  const { skillId, image, skillName, providerName, price, rating } = data;

  return (
    <div
      className="p-4 flex flex-col gap-3 bg-white rounded-xl shadow-md hover:shadow-xl 
                 transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="w-full h-56 overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src={image} alt={skillName} />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{skillName}</h2>
        <p className="text-sm text-gray-500 mb-2">Instructor: {providerName}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-green-600">${price}</span>
          <span className="font-medium text-[#FF8811]">{rating} ★</span>
        </div>

        {/* View Details Button (Linked) */}
        <Link
          to={`/courseDetails/${skillId}`}
          className="mt-auto text-center bg-gradient-to-r from-green-500 to-green-600 text-white 
                     font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 
                     transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MainCard;
