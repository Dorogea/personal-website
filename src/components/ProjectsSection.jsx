import React from "react";

const ProjectsSection = () => {
  return (
    <section className="bg-[#2b1a3c] text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-purple-200 mb-10">🌟 Featured Projects</h2>

        <div className="mb-6">
          <h3 className="text-xl text-purple-300 font-semibold">Professional Work</h3>
          <ul className="list-disc list-inside text-gray-200 mt-2 space-y-2">
            <li><a href="https://www.semimaratonulcraiovei.ro/" className="text-purple-400 hover:underline">Semimaratonul Craiovei</a> – Official race website (Frontend Dev)</li>
            <li>Compliance Application – HR/Accounting platform (Full-Stack – private repo)</li>
            <li>LinguaQuest – Language Learning App (React + Spring Boot)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-purple-300 font-semibold">Open Source</h3>
          <ul className="list-disc list-inside text-gray-200 mt-2 space-y-2">
            <li><a href="https://github.com/Dorogea/WoW-DBM-Bleach-Music-Pack" className="text-purple-400 hover:underline">WoW DBM Bleach Music Pack</a></li>
            <li><a href="https://github.com/Dorogea/Club-Sportiv-Website" className="text-purple-400 hover:underline">Club Sportiv Website</a></li>
            <li><a href="https://github.com/Dorogea/Phishing-EvStudWebsite" className="text-purple-400 hover:underline">Phishing Educational Site</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
