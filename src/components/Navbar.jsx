import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#2b1a3c] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-300">Eduard Dorogea</h1>
        <a
          href="https://www.linkedin.com/in/eduard-dorogea-263072236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
