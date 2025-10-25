import React from "react";
const FirstHero = () => {
    return (<section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden mb-5">
        {/* Background Image */}
        <img src="https://images.unsplash.com/photo-1713463974773-3cd8b8ba6830?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Learn Al-Quran" className="absolute top-0 left-0 w-full h-full object-cover" />
        {/* Overlay (Dark gradient for text visibility) */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Text Content */}
        <div className="relative text-center text-white z-10 px-5 ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Make Your Success a Priority.</h1>
            <p className="text-lg md:text-2xl mb-6">Begin your Educational Journey Today.

            </p>

        </div>
    </section>);
};
export default FirstHero;