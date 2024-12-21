import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className='flex flex-col md:flex-row md:space-x-12 item-center mb-4'>
            <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Sanit Patil</h3>
                <p className="text-gray-400">Full-Stack Developer based in India, specializing in web and software development.</p>
            </div>           
        </div>
        <div className="border-t border-gray-600 pt-4 flex fles-col md:flex-row justify-between items-center">
            <p className="text-gray-400 ">
                &copy;{new Date().getFullYear()} Sanit Patil. All rights reserved.
            </p>
            <div className="flex space-x-4 my-4 md:my-0">
                <a href="https://www.facebook.com/sanit.patil.397?mibextid=ZbWKwL" className="text-gray-400 hover:text-white">
                    <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/invites/contact/?igsh=w157zxol7lcd&utm_content=7km52ey " className="text-gray-400 hover:text-white">
                    <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/sanit-patil-88740a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/SanitPatil24" className="text-gray-400 hover:text-white">
                    <FaGithub/>
                </a>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                    Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Services
                </a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
