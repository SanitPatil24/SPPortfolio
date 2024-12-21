import React from 'react'
import weather from '../assets/weather.jpg'
import text from '../assets/text-analyzer.png'
import netflix from '../assets/netflix.png'
import foodiehub from '../assets/foodiehub.png'
import portfolio from '../assets/portfolio.jpg'

const projects = [
  {
    id: 1,
    name: "Weather App",
    technologies: "HTML, CSS, JavaScript",
    image: weather,
    github:"https://github.com/SanitPatil24/WeatherApp.git",
    run:"https://sanitpatil24.github.io/WeatherApp/"
  },
  {
    id: 2,
    name: "Text Analyzer",
    technologies: "React",
    image: text,
    github:"https://github.com/SanitPatil24/Text-Analyzer.git",
    run:"https://sanitpatil24.github.io/Text_Analyzer/"
  },
 
  {
    id: 3,
    name:"Netflix Clone",
    technologies: "React Js",
    image:netflix,
    github:"https://github.com/SanitPatil24/NetflixClone",
    run:"https://sanitpatil24.github.io/NetflixClone/"
  },
  {
    id: 4,
    name:"FoodieHub",
    technologies: "React Js",
    image:foodiehub,
    github:"",
    run:""
  },
  {
    id: 5,
    name:"Portfolio",
    technologies: "React Js",
    image:portfolio,
    github:"https://github.com/SanitPatil24/SpPortfolio",
    run:"https://sanitpatil24.github.io/SpPortfolio/"
  }
]

const Project = () => {
  return (
    <div className='bg-black text-white  py-20' id="project">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h1 className='text-4xl font-bold text-center mb-12'>My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg-cols-3 gap-8'>
            {projects.map((project) => (
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                    <h3 className="text-2x1 font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-2">{project.technologies}</p>
                    <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Project Code</a>
                    <a href={project.run} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full ml-4" target="_blank" rel="noopener noreferrer">Run Project</a>

                </div>  
            ))}
        </div>
      </div>
    </div>
  )
}

export default Project
