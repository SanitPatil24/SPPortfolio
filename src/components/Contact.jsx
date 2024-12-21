import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaMapPin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:prathameshgaikwad1203@gmail.com" className='hover:underline'>
                    sanitpatil24@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+918530297242</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Pen, Raigad - Maharastra <FaMapPin className='inline-block text-red-700'/> 402107 </span>
            </div>
          </div>
          <div className='flex-1 w-full border-white  border-y-2 p-7 shadow-lg shadow-white/50 rounded-xl'>
            <form className ='space-y-4' target="_blank" action="https://formsubmit.co/prathameshgaikwad292@gmail.com" method="POST">
                <div>
                    <label htmlFor="name" className='block mb-2 text-2xl'>Your Name</label>
                    <input type="name" name = "name"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2 text-2xl'>Email</label>
                    <input type="email" name = "email"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2 text-2xl'>Message</label>
                    <textarea type="text" name ="text"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full text-2xl ' type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact