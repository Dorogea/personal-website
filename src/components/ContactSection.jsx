import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#2b1a3c] text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-purple-200 mb-6">📫 Let's Connect</h2>
      <p className="mb-4 text-gray-300">Open to collaboration, freelance work, or just a chat.</p>
      <a
        href="https://www.linkedin.com/in/eduard-dorogea-263072236/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        <FaLinkedin className="mr-2" />
        Connect on LinkedIn
      </a>
    </section>
  );
};

export default ContactSection;
