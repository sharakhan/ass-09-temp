import React from 'react';

import {  useLoaderData } from 'react-router';


import Slider from '../Components/Slider';
import Card from '../Components/Card';
import HeroSection from '../Components/HeroSection';
import PlanCards from '../Components/PlanCard';
import FirstHero from '../Components/FirstHero';

const Home = () => {

  const datas = useLoaderData()
  
  return (
    <>
      <div className="bg-black">
        
        <Slider/>
        <Card datas={datas.slice(0,6)}/>
        <div className="flex justify-center items-center mt-10 mb-10">
        <a href="/course" className="font-semibold text-white bg-green-800 px-7 py-3 rounded-md">Show All</a>
      </div>
      <FirstHero/>
      <PlanCards/>
      <HeroSection/>
      <section className="bg-green-700 text-white py-14 px-5 text-center">
        <h2 className="text-3xl font-bold mb-3">Start Your Quran Learning Journey Today!</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Join thousands of students learning Quran online with trusted teachers.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#0A6847] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
      </div>
    </>
  );
};

export default Home;