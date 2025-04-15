import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8 mr-2"
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64"
                alt="SoundFont Creator"
              />
              <span className="font-bold text-xl">SoundFont Creator</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Home</Link>
                <Link to="/midi-standards" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">MIDI Standards</Link>
                <Link to="/instruments" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Instruments</Link>
                <Link to="/creator" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Creator</Link>
                <Link to="/download" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Download</Link>
                <Link to="/licenses" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Licenses</Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/midi-standards" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              MIDI Standards
            </Link>
            <Link 
              to="/instruments" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Instruments
            </Link>
            <Link 
              to="/creator" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Creator
            </Link>
            <Link 
              to="/download" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
            <Link 
              to="/licenses" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Licenses
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;