import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-[#1e102a] text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-purple-200 mb-10">💼 Experience</h2>
        <ul className="space-y-6 text-gray-200">
          <li>
            <strong>IT Technician & Robotics Teacher</strong> – Scoala Romano-Britanica Craiova (2024–Present)
            <p className="text-sm mt-1">Teaching CS, Robotics & STEM | Programming & IT support</p>
          </li>
          <li>
            <strong>Java Software Engineer</strong> – Caelynx Europe (2023–2024)
            <p className="text-sm mt-1">Structural analysis tool (Java 3D + Swing) | 3D modeling and UI</p>
          </li>
          <li>
            <strong>AWR Analyst & Support</strong> – Caphyon (Sept 2023)
            <p className="text-sm mt-1">SEO, SERP analysis, and keyword calculators for AWR</p>
          </li>
          <li>
            <strong>Solution Engineer</strong> – Caphyon (Iul 2023)
            <p className="text-sm mt-1">Advanced Installer packaging & automation (PowerShell)</p>
          </li>
          <li>
            <strong>Technical Support</strong> – Bitdefender (2021–2023)
            <p className="text-sm mt-1">Product config, account support, customer service</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
