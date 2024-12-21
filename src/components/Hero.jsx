import React from 'react'
import HeroImage from '../assets/sanit-4.jpg'
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-500 hover:scale-105'/>
      <h1 className='text-4xl font-bold '>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sanit Pratap Patil</span>
        ,Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications 
      </p>
      <div className='mt-8 space-x-4'>
        <button onClick={scrollToContact} className='bg-gradient-to-r from-green-400 to-blue-500 text-white  hidden md:inline transform transition-transition duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        {/* <a href="../assets/resume.pdf" download="Sanit_Patil_resume.pdf"></a> */}
        <a  href="./Resume.pdf" download  className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white  hidden md:inline transform transition-transition duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
      </div>
    </div>
  )
}

export default Hero
