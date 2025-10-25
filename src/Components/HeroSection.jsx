import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-5">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1170"
        alt="Learn Al-Quran"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative text-center text-white z-10 px-5">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
          Learn Al-Qur'an
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-6 animate-fadeInUp delay-200">
          Begin your journey to understand and connect with the Holy Qur'an.
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition animate-fadeInUp delay-500">
          Login
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
