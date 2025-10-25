import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0A6847]  py-16 px-5">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-4xl font-bold mb-3">About Learn Al-Quran</h1>
                    <p className="text-lg max-w-2xl mx-auto ">
                        Empowering Muslims worldwide to learn the Holy Quran with proper Tajweed,
                        understanding, and love for Islam — from the comfort of home.
                    </p>
                </div>
            </section>

            {/* About with Image */}
            <section className="max-w-6xl mx-auto py-14 px-5 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        About Us
                    </h2>
                    <p className="text-white leading-relaxed mb-4">
                        We are Providing Online Holy Quran Classes All Over The World.Specially Learn Quran Online Bd is looking for
                        Bangladeshi who are residing abroad.Let's learn Quran Online with one of the best Online Quran Learning Academy. We are providing online Quran
                        teaching service to kids and adults, male and female across the globe. Our Quran learning courses are specially
                        designed for you and your kids. Under the guidance of qualified Quran Tutors.
                    </p>
                    <p className="text-white leading-relaxed">
                        We will provide you step by step
                        Quran Learning with the rules of Tajweed and essential Islamic knowledge. Are you looking for an online Quran
                        tutor for yourself or for your children, let’s learn Quran with online Quran tutor in one-to-one Quran class
                        at the comfort of your home.
                    </p>
                </div>

                <div>
                    <img
                        src="https://images.unsplash.com/photo-1644374544063-78b5cd18ba79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073"
                        alt="Online Quran Class"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-14 px-5 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Who We Are
                    </h2>
                    <p className="text-white leading-relaxed mb-4">
                        Learn Al-Quran is a trusted online Quran learning platform dedicated to
                        teaching children and adults the Quran with correct Tajweed and Islamic manners.
                        Our certified teachers ensure personalized one-on-one learning for everyone.
                    </p>
                    <p className="text-white leading-relaxed">
                        We aim to make Quran education accessible globally through flexible online
                        classes, making it suitable for kids, adults, beginners, and reverts.
                    </p>
                </div>
            </section>
            {/* Image Gallery Section */}
            <section className="max-w-6xl mx-auto py-5 px-5">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                    Our Learning Environment
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { img: "https://images.unsplash.com/photo-1624863035482-b005dbba3b6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", text: "1-to-1 Live Classes" },
                        { img: "https://images.unsplash.com/photo-1712249237537-8c5a0420653b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", text: "Kids Quran Learning" },
                        { img: "https://images.unsplash.com/photo-1660927692124-78f877107bf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=771", text: "Qualified Male & Female Tutors" },
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <img
                                src={item.img}
                                alt={item.text}
                                className="rounded-xl shadow-md w-full h-64 object-cover hover:scale-105 transition"
                            />
                            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0A6847]/90 text-white px-3 py-1 rounded-md text-sm">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="max-w-6xl mx-auto py-14 px-5 grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md p-8 rounded-xl">
                    <h2 className="text-2xl font-semibold text-[#0A6847] mb-3">Our Mission</h2>
                    <p className="text-gray-700">
                        To spread Quran education globally with expert teachers and provide a platform
                        where every Muslim can learn with ease, love and proper Islamic values.
                    </p>
                </div>

                <div className="bg-white shadow-md p-8 rounded-xl">
                    <h2 className="text-2xl font-semibold text-[#0A6847] mb-3">Our Vision</h2>
                    <p className="text-gray-700">
                        To bring Quran learning to every home and build a generation that recites,
                        understands, and lives by the teachings of the Quran.
                    </p>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-[#0A6847] text-white py-14 px-5 text-center">
                <h2 className="text-3xl font-bold mb-3">Start Your Quran Journey Today!</h2>
                <p className="max-w-xl mx-auto mb-6 text-lg">
                    Join thousands of students learning Quran online with our certified Quran teachers.
                </p>
                <a
                    href="/contact"
                    className="bg-white text-[#0A6847] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default AboutUs;
