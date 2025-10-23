import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import MainCardContainer from "../Components/MainCardContainer";
import SrcNot from "../Components/SrcNot";

const Course = () => {
  const datas = useLoaderData();
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // যদি search খালি থাকে, তাহলে loading false রাখো
    if (src.trim() === "") {
      setLoading(false);
      return;
    }

    // search শুরু হলে loading true
    setLoading(true);

    // ছোট delay পরে false
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [src]);

  const normalize = (text) => text.trim().replace(/\s+/g, " ").toLowerCase();

  const finalDatas = datas.filter((data) => {
    const term = normalize(src);
    return (
      normalize(data.skillName).includes(term) ||
      normalize(data.providerName).includes(term) ||
      normalize(data.description).includes(term)
    );
  });

  const skillName = "SkillName";
  const providerName ="Instructor";

  return (
    <div className="max-w-7xl mx-auto px-5 mt-10">
      {/* Header Card */}
      <Card skillName={skillName} providerName={providerName} />

      {/* Search bar & counter */}
      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center mt-10">
        <h2 className="font-semibold text-2xl">
          ({finalDatas.length}) Course Found
        </h2>

        <label className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2 w-full sm:w-1/3">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            placeholder="Search..."
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            className="outline-none flex-1 bg-transparent"
          />
        </label>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-10">
        {loading ? (
          <Loading />
        ) : finalDatas.length <= 0 ? (
          <SrcNot />
        ) : (
          <MainCardContainer datas={finalDatas} />
        )}
      </div>
    </div>
  );
};

export default Course;
