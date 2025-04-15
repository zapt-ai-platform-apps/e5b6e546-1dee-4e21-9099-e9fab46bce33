import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} SoundFont Creator. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              Made on ZAPT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;