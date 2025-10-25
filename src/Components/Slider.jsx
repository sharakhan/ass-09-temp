// Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Learn Quran with Tajweed",
      img: "https://learningquranonlinebd.com/wp-content/uploads/2021/10/learn-quran-online-slider-1.jpg",
      desc: "Start your journey to recite the Quran beautifully.",
    },
    {
      id: 2,
      title: "Online Quran Classes",
      img: "https://images.unsplash.com/photo-1565719376829-614b70ee220f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      desc: "Join live classes with certified tutors.",
    },
    {
      id: 3,
      title: "Quran translation & Tafsir",
      img: "https://learnquranonlinebd.com/wp-content/uploads/2020/10/teach-the-holy-quran-1-1920x700.jpeg",
      desc: "Hifz made easier with daily guidance.",
    },
    {
      id: 4,
      title: "Memorization Programs",
      img: "https://images.unsplash.com/photo-1649822574475-b4a49f3d8496?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      desc: "Hifz made easier with daily guidance.",
    },

   
  ];

  return (
    <div className="max-w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-5 rounded-2xl">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
