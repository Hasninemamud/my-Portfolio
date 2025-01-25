import React from "react"
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <form className="bg-black text-white p-8 rounded-lg shadow-xl mb-12">
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Or reach out directly:</h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                <a href="mailto:hasninemamud20@gmail.com" className="text-black hover:underline">
                hasninemamud20@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                <a href="tel:+1234567890" className="text-black hover:underline">
                  +8801636441892
                </a>
              </p>
              <div className="flex justify-center space-x-6 mt-6">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition duration-300"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

