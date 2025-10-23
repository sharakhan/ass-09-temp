import { useLoaderData, useParams } from "react-router";


import CourseDetails from "./CourseDetails";

const Details = () => {
  const datas = useLoaderData();
  const params = useParams();
  const id = Number(params.skillId);
  const match = datas.find((data) => data.id === id);


  return (
    <>
      
      <div className="max-w-7xl mx-auto px-5 mt-10">
        <CourseDetails match={match} />
       
        <div className="mt-5 ">
          <h2 className="text-2xl font-semibold mb-5">Description</h2>
          <p className="text-xl text-[#627382]">{match.description}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
