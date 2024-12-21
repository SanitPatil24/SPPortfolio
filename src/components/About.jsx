import React, { useState } from "react";
import AboutImage from "../assets/sanit-2.jpg";

const About = () => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isBackendOpen, setIsBackendOpen] = useState(false);

  const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);
  const toggleBackend = () => setIsBackendOpen(!isBackendOpen);

  return (
    <div className="bg-black text-white py-2" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Prathamesh"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            {/* Frontend Skills Dropdown */}
            <div>
              <button
                onClick={toggleFrontend}
                className="text-xl font-semibold text-blue-400 hover:underline flex items-center  "
              >
                Frontend Skills
                <span className="ml-2 text-lg">{isFrontendOpen ? "▲" : "▼"}</span>
              </button>
              {isFrontendOpen && (
                <div className="mt-4 space-y-4">
                  <p>Here are the frontend technologies I work with:</p>
                  <ul className="list-disc pl-6">
                    <li>HTML & CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Responsive Web Design</li>
                    <li>Tailwind CSS</li>
                    <li>Version Control with Git</li>
                  </ul>
                </div>
              )}
              {/* Progress bar for Frontend next to the dropdown */}
              <div className="flex items-center space-x-6 mt-4">
                <label htmlFor="frontend" className="text-lg font-semibold">Frontend</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>

            {/* Backend Skills Dropdown */}
            <div className="mt-6">
              <button
                onClick={toggleBackend}
                className="text-xl font-semibold text-blue-400 hover:underline flex items-center"
              >
                Backend Skills
                <span className="ml-2 text-lg">{isBackendOpen ? "▲" : "▼"}</span>
              </button>
              {isBackendOpen && (
                <div className="mt-4 space-y-4">
                  <p>Here are the backend technologies I work with:</p>
                  <ul className="list-disc pl-6">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB</li>
                    <li>SQL Databases (MySQL, PostgreSQL)</li>
                    <li>Authentication & Authorization</li>
                  </ul>
                </div>
              )}
              {/* Progress bar for Backend next to the dropdown */}
              <div className="flex items-center space-x-6 mt-4">
                <label htmlFor="backend" className="text-lg font-semibold">Backend</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex justify-between text-center">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Fresher
            </h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              4+
            </h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              ---
            </h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;