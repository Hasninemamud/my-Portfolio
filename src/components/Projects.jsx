import React from "react"
import { ArrowUpRight, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "GetYourProducts",
      description: "A full-stack e-commerce solution with Django.",
      technologies: ["Django", "SQLite", "CKEditor", "JavaScript"],
      liveUrl: "https://github.com/Hasninemamud/GetYourProduct",
      githubUrl: "https://github.com/Hasninemamud/GetYourProduct",
    },
    {
      id: 2,
      name: "AuctionCraft",
      description: "A productiv Online Auction Platform.",
      technologies: ["Django ", "SQLite ", "Tailwind CSS", "JavaScript", "Chart.js"],
      liveUrl: "https://github.com/Hasninemamud/Auction-Craft",
      githubUrl: "https://github.com/Hasninemamud/Auction-Craft",
    },
    {
      id: 3,
      name: "BloggerHub",
      description: "BloggerHub is a fully functional blogging platform",
      technologies: ["Django ", "SQLite ", "Tailwind CSS", "JavaScript", ],
      liveUrl: "https://github.com/Hasninemamud/BloggerHub",
      githubUrl: "https://github.com/Hasninemamud/BloggerHub",
    },
    {
      id: 4,
      name: "AudioScribe ",
      description: "Analytics dashboard for social media performance tracking.",
      technologies: ["Flask ", "Flask-SocketIO", " AssemblyAI API",],
      liveUrl: "https://audioscribe-bd.vercel.app/",
      githubUrl: "https://github.com/Hasninemamud/AudioScribe",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black text-white p-6 rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-white text-black text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:underline"
                >
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:underline"
                >
                  GitHub <Github className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

