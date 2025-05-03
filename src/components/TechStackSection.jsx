import React from "react";

const stack = {
  Frontend: ["React", "JavaScript", "Bootstrap", "HTML5", "CSS3", "Tauri", "Electron"],
  Backend: ["Spring Boot", "Swagger", "PostgreSQL", "Docker"]
};

const TechStackSection = () => {
  return (
    <section className="bg-[#1e102a] text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-purple-200 mb-10">🛠️ Technical Stack</h2>
        {Object.entries(stack).map(([title, tools]) => (
          <div key={title} className="mb-8">
            <h3 className="text-xl text-purple-300 mb-3">{title}</h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <span key={tool} className="bg-purple-800 text-white px-4 py-2 rounded-full shadow-sm text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
