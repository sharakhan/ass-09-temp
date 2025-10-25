import MainCardContainer from "./MainCardContainer";
import PageHeading from "./PageHeading";

const Card = ({ 
  datas = [], 
  skillName = "Our Courses", 
  description = " ", 
  subtitle = " " 
}) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-14 mb-20 text-white ">
      
      {/* Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto ">
        <PageHeading skillName={skillName} description={description} />
        <p className="text-gray-600 mt-3 text-lg italic">{subtitle}</p>
      </div>

      {/* Course Cards */}
      <div className="mt-12 animate-fadeIn ">
        <MainCardContainer datas={datas} />
      </div>
    </div>
  );
};

export default Card;
