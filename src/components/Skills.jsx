import React from "react";
import {
  Code,
  FileJson,
  Palette,
  Server,
  GitBranch,
  PiIcon as Python,
  Globe,
  CodepenIcon as Css3,
} from "lucide-react";

export default function Skills() {
  // List of skills with icons
  const skills = [
    { name: "React", icon: Code },
    { name: "JavaScript", icon: FileJson },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Django", icon: Server },
    { name: "Git", icon: GitBranch },
    { name: "Python", icon: Python },
    { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Css3 },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="mb-4 p-3 bg-gray-700 rounded-full">
                <skill.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
