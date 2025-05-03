import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#1e102a] text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-300">Hi 👋, I'm Eduard Dorogea</h1>
        <h2 className="text-2xl mt-4 text-purple-100">Full-Stack Developer from Craiova, Romania</h2>
        <p className="mt-2 text-lg text-gray-300">Specializing in modern web applications with React & Spring Boot</p>
        <img
          src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif"
          alt="Coding GIF"
          className="mx-auto mt-8 rounded-xl w-[400px] shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
