import MainCardContainer from "./MainCardContainer";
import PageHeading from "./PageHeading";

const Card = ({ datas }) => {
  const skillName = "Our Quran Learning Courses";
  const description =
    "Deepen your understanding of the Holy Quran through structured lessons designed for beginners and advanced learners alike.";
  const subtitle =
    "Start your journey to mastering Quranic recitation, Tajweed, and translation — guided by expert teachers.";

  return (
    <div className="max-w-7xl mx-auto px-5 mt-10 mb-16 text-center">
      {/* Title & Subtitle */}
      <PageHeading skillName={skillName} description={description} />
      <p className="text-gray-600 mt-3 text-lg italic">{subtitle}</p>

      {/* Course Cards */}
      <div className="mt-10">
        <MainCardContainer datas={datas} />
      </div>
    </div>
  );
};

export default Card;
