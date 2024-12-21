import React, { useState, useRef, useEffect } from 'react';
import flag from '../assets/Flag_of_India.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const iconRef = useRef(null);
  

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        iconRef.current && !iconRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center w-full'>
        {/* Logo Section */}
        <div className='text-2xl font-bold whitespace-nowrap flex items-center'>
          Sanit Patil
          <img src={flag} alt="Indian Flag" className="ml-2 w-8 h-5" />
        </div>

        {/* Dropdown Icon and Menu */}
        <div className='relative'>
          <i
            ref={iconRef} // Reference to the icon
            className="fas fa-list text-2xl cursor-pointer hover:text-gray-400 hover:scale-110 transition-all duration-300"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on icon click
          ></i>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              ref={dropdownRef} // Reference to the dropdown
              className='absolute right-0 mt-2 bg-black text-white rounded-md shadow-lg w-48'
            >
              <a href="#home" className='block px-4 py-2 hover:bg-gray-700'>Home</a>
              <a href="#about" className='block px-4 py-2 hover:bg-gray-700'>About Me</a>
              <a href="#service" className='block px-4 py-2 hover:bg-gray-700'>Services</a>
              <a href="#project" className='block px-4 py-2 hover:bg-gray-700'>Projects</a>
              <a href="#contact" className='block px-4 py-2 hover:bg-gray-700'>Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
