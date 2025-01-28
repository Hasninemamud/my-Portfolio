import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header className="bg-white text-black py-8 shadow-md">
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img className="w-30 h-[60px] object-contain" src="/images/logo.jpg" alt="Logo" />
          </div>


          {/* Menu Toggle (for mobile) */}
          <button
            className="sm:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`flex flex-col sm:flex-row sm:items-center sm:space-x-6 absolute sm:static bg-white w-full sm:w-auto top-16 left-0 sm:top-auto sm:left-auto transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
              }`}
          >
            <li className="text-center">
              <a
                href="#about"
                className="block py-2 sm:py-0 hover:text-gray-600 transition duration-300"
              >
                About
              </a>
            </li>
            <li className="text-center">
              <a
                href="#projects"
                className="block py-2 sm:py-0 hover:text-gray-600 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li className="text-center">
              <a
                href="#skills"
                className="block py-2 sm:py-0 hover:text-gray-600 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li className="text-center">
              <a
                href="contact"
                className="block py-2 sm:py-0 hover:text-gray-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center mt-12">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Hasnine Mamud</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl mb-8 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A passionate developer who loves crafting amazing web applications that
            deliver exceptional user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Get in Touch Button */}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </a>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/19IQyEIAF4RL7Y9vGUZZuuEEFPEzA3G3r/view?usp=sharing"
              download
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-300"
            >
              Download Resume
            </a>
          </div>


        </div>

      </div>
    </header>
  );
}

export default Header;
