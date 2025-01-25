export default function Footer() {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright Notice */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
            </div>
  
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Twitter
              </a>
            </div>
  
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    );
  }