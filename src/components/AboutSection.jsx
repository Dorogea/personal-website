import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#2b1a3c] text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-200 mb-6">🔭 Current Focus</h2>
        <ul className="list-disc list-inside text-lg space-y-3 text-gray-200">
          <li>Building a <strong>Compliance Application</strong> (HR/Accounting tools) – private</li>
          <li>Launched <a href="https://www.semimaratonulcraiovei.ro/" className="text-purple-400 hover:underline">Semimaratonul Craiovei</a> website</li>
          <li>Maintaining <strong>LinguaQuest</strong> – Language Learning App (former degree project)</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
