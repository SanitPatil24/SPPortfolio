import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize EmailJS
    emailjs.init('your_emailjs_user_id');  // Replace with your EmailJS User ID

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send('your_service_id', 'your_template_id', templateParams) // Replace with your service and template IDs
      .then(
        (response) => {
          console.log('Email sent successfully', response);
          alert('Your message has been sent!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Error sending email', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <div className='bg-black text-white py-20' id="contact">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-4xl font-bold text-center mb-12'>Contact Me</h1>
          <div className='flex flex-col md:flex-row items-center md:space-x-8'>
            <div className="flex-1">
              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
                Let's Talk
              </h3>
              <p>I'm open to discussing web development projects or partnership opportunities</p>
              <div className='mb-4 mt-8'>
                <FaPhone className='inline-block text-green-400 mr-2' />
                <a href='tel:+918530297242' className='hover:underline'>+91 8530297242</a>
              </div>
              <div className='mb-4'>
                <FaEnvelope className='inline-block text-green-400 mr-2' />
                <a href='mailto:sanitpatil24gmail.com' className='hover:underline'>sanitpatil24@gmail.com</a>
              </div>
              <div className='mb-4'>
                <FaMapMarkerAlt className='inline-block text-green-400 mr-2' />
                <span>Pen, Raigad-Maharashtra, 402107</span>
              </div>
            </div>
            <div className='flex-1 w-full border-white border-y-2 p-7 shadow-lg shadow-white/50 rounded-xl'>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className='block mb-2'>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block mb-2'>Email</label>
                  <input
                    type="email"
                    name="email"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className='block mb-2'>Message</label>
                  <textarea
                    name="message"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-500 hover:scale-105 px-8 py-2 rounded-full w-full md:w-auto'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
