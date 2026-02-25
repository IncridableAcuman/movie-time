// src/pages/Home.jsx (yoki src/components/Home.jsx)
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Movie from "../components/Movie";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      {/* Background image bilan overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-20 pb-16">
          <div className="text-center mb-16 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Welcome to Movie App
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Sevimli filmlaringizni kashf eting va yangi kinolarni toping
            </p>
          </div>

          <Movie category="now_playing" title="Hozirda kinoteatrlarda" />
          <Movie category="popular" title="Eng ommabop filmlar" />
          <Movie category="top_rated" title="Eng yuqori baholanganlar" />
          <Movie category="upcoming" title="Tez orada chiqadigan filmlar" />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;