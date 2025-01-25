import React from "react";

function About({ boxSize = "md" }) {
  const boxSizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  };

  return (
    <section className="py-16 bg-white">
      <div className={`container mx-auto px-4 ${boxSizes[boxSize]}`}>
        <div className="bg-white text-black p-8 rounded-lg shadow-2xl flex flex-col lg:flex-row items-center lg:items-start">
          {/* Image Box */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:mr-8">
            <img
              src="/image/HasnineMamud.jpg" // Replace with your image path
              alt="About Me"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
              About Me
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                I'm a passionate developer who loves building web applications.
                With a keen eye for detail and a drive for innovation, I strive
                to create seamless, user-friendly experiences that make a
                difference.
              </p>
              <p className="leading-relaxed">
                My journey in web development began with a curiosity for how
                things work behind the scenes. Since then, I've honed my skills
                in various technologies and frameworks, always eager to learn
                and adapt to the ever-evolving tech landscape.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and community events.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
