import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Create Realistic SoundFonts
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore and create high-quality SoundFonts with detailed information on MIDI standards,
          instrument samples, and professional sound banks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Learn MIDI Standards</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive guides on General MIDI, GM Level 2, Roland GS, and Yamaha XG standards.
            </p>
            <Link to="/midi-standards" className="inline-block bg-blue-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800">
              Explore Standards
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Browse Instruments</h2>
            <p className="text-gray-600 mb-4">
              Explore a vast library of instrument samples, presets, and sound banks.
            </p>
            <Link to="/instruments" className="inline-block bg-blue-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800">
              Browse Instruments
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Create SoundFonts</h2>
            <p className="text-gray-600 mb-4">
              Use our tools to create professional-quality SoundFonts for your music production.
            </p>
            <Link to="/creator" className="inline-block bg-blue-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800">
              Start Creating
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">What are SoundFonts?</h2>
        <p className="text-gray-700 mb-4">
          SoundFonts are a file format that contains audio samples of musical instruments and sound effects. 
          They were originally developed by E-mu Systems and Creative Labs for their Sound Blaster sound cards.
        </p>
        <p className="text-gray-700 mb-4">
          SoundFonts allow musicians and producers to create realistic instrument sounds using 
          wavetable synthesis, which plays back recorded samples of actual instruments at different 
          pitches and with various modulations.
        </p>
        <p className="text-gray-700">
          With our SoundFont Creator, you can explore different MIDI standards, browse instrument 
          libraries, and create your own professional-quality SoundFonts.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-6">
          Download ready-made SoundFonts or create your own custom sound banks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/download" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-lg cursor-pointer hover:bg-blue-800">
            Download SoundFonts
          </Link>
          <Link to="/creator" className="inline-block bg-blue-50 text-blue-900 border border-blue-900 px-6 py-3 rounded-lg font-medium text-lg cursor-pointer hover:bg-blue-100">
            Create Your Own
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;