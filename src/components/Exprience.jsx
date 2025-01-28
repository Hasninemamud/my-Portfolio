import React from "react"
import { Building2, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Professional Experience</h2>
        <div className="max-w-3xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Software Engineer (Intern)</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Internship</span>
            </div>
            <div className="flex items-center text-white mb-2">
              <Building2 className="w-5 h-5 mr-2" />
              <span className="font-medium">RobotTechValley</span>
            </div>
            <div className="flex items-center text-white mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span>04/2024 – 07/2024</span>
            </div>
            <div className="flex items-center text-white mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>
                Collaborated with a cross-functional team to enhance the user experience, resulting in a 20% increase in
                system adoption.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

