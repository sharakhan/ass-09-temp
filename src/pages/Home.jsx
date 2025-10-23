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
      <div className="">
        
        <Slider/>
        <Card datas={datas.slice(0,6)}/>
        <div className="flex justify-center items-center mt-10 mb-10">
        <a href="/course" className="font-semibold text-white bg-green-800 px-7 py-3 rounded-md">Show All</a>
      </div>
      <FirstHero/>
      <PlanCards/>
      <HeroSection/>
      </div>
    </>
  );
};

export default Home;