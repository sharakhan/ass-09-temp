import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-8">

        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Learn <span className="text-green-500">AL-QURAN</span>
          </h2>
          <p className="text-sm text-gray-400">
            Empower your soul through Quran learning — from basic recitation to deep understanding. 
            Start your spiritual journey today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/courses" className="hover:text-green-400">Courses</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-400 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-400 text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-400 text-xl">
              <FaInstagram/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-green-400 text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Learn Al-Quran. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
