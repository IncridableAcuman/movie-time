// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🎬 Movie Time</h2>
          <p className="text-sm text-gray-400">
            Watch the latest movies, trending series and exclusive content
            anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Movies</li>
            <li className="hover:text-white cursor-pointer">TV Shows</li>
            <li className="hover:text-white cursor-pointer">Trending</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Action</li>
            <li className="hover:text-white cursor-pointer">Comedy</li>
            <li className="hover:text-white cursor-pointer">Drama</li>
            <li className="hover:text-white cursor-pointer">Horror</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTelegram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Movie Time. Izzatbek Abdusharipov
      </div>
    </footer>
  );
};

export default Footer;