import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand / Logo */}
          <div className="text-white text-lg font-bold">
            <a href="#home" className="hover:text-pink-500 transition-all duration-300">
              My Portfolio
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-pink-500 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 1C6.477 1 2 5.477 2 11c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.252-4.555-1.11-4.555-4.942 0-1.092.39-1.985 1.029-2.683-.104-.253-.446-1.27.098-2.648 0 0 .84-.27 2.75 1.025A9.579 9.579 0 0112 6.07c.853.003 1.71.115 2.51.338 1.91-1.295 2.75-1.025 2.75-1.025.545 1.378.203 2.395.1 2.648.64.698 1.028 1.591 1.028 2.683 0 3.842-2.338 4.686-4.564 4.935.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C19.14 19.163 22 15.417 22 11c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-500 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0v-8zM12 9v8m3-7v7m3-6v6m-3-5h6"
                />
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-white text-sm">
            <a
              href="#home"
              className="hover:text-pink-500 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-pink-500 transition-all duration-300"
            >
              About Me
            </a>
            <a
              href="#services"
              className="hover:text-pink-500 transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-pink-500 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-xs mt-6">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
