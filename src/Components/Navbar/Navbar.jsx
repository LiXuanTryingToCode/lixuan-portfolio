import React, { useState, useEffect} from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Function to check if the user is at the top of the page
  const checkScrollTop = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Check the scroll position when the component mounts
    checkScrollTop();

    // Update the scroll position when scrolling
    const handleScroll = () => {
      checkScrollTop();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav
      className={`fixed w-full top-0 z-20 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="logo.png" alt="Logo" className="h-8" />
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-black font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-black font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-800 hover:text-black font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-800 hover:text-black font-medium">
              Contact
            </a>
          </div>

          {/* Right-side Button */}
          <div className="hidden md:block">
            <button className="py-2 px-4 font-semibold rounded text-white bg-gradient-to-r from-[#F74949] to-[#F2147B] bg-[length:200%_auto] hover:bg-right transition-all duration-500">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-4 pb-4 space-y-4">
            <a href="#home" className="block text-gray-800 hover:text-black">Home</a>
            <a href="#about" className="block text-gray-800 hover:text-black">About</a>
            <a href="#projects" className="block text-gray-800 hover:text-black">Projects</a>
            <a href="#contact" className="block text-gray-800 hover:text-black">Contact</a>
            <button className="w-full  text-white py-2 rounded  bg-gradient-to-r from-[#F74949] to-[#F2147B] bg-[length:200%_auto] hover:bg-right transition-all duration-500 ">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
