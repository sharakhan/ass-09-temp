import MainCard from "./MainCard";

const MainCardContainer = ({ datas = [] }) => { // ✅ fallback empty array
  if (!Array.isArray(datas) || datas.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
      {datas.map((data) => (
        <MainCard key={data.skillId} data={data} />
      ))}
    </div>
  );
};

export default MainCardContainer;
