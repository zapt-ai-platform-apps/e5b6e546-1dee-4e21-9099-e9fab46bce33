import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

// Instrument categories and instruments
const instrumentCategories = [
  {
    name: 'Piano',
    instruments: [
      { id: 1, name: 'Acoustic Grand Piano', sample: 'piano-c4.mp3' },
      { id: 2, name: 'Bright Acoustic Piano', sample: 'bright-piano-c4.mp3' },
      { id: 3, name: 'Electric Grand Piano', sample: 'electric-grand-c4.mp3' },
      { id: 4, name: 'Honky-tonk Piano', sample: 'honky-tonk-c4.mp3' },
    ]
  },
  {
    name: 'Chromatic Percussion',
    instruments: [
      { id: 9, name: 'Celesta', sample: 'celesta-c4.mp3' },
      { id: 10, name: 'Glockenspiel', sample: 'glockenspiel-c4.mp3' },
      { id: 11, name: 'Music Box', sample: 'music-box-c4.mp3' },
    ]
  },
  {
    name: 'Organ',
    instruments: [
      { id: 17, name: 'Drawbar Organ', sample: 'drawbar-organ-c4.mp3' },
      { id: 18, name: 'Percussive Organ', sample: 'percussive-organ-c4.mp3' },
      { id: 19, name: 'Rock Organ', sample: 'rock-organ-c4.mp3' },
    ]
  },
  {
    name: 'Guitar',
    instruments: [
      { id: 25, name: 'Acoustic Guitar (nylon)', sample: 'nylon-guitar-c4.mp3' },
      { id: 26, name: 'Acoustic Guitar (steel)', sample: 'steel-guitar-c4.mp3' },
      { id: 27, name: 'Electric Guitar (jazz)', sample: 'jazz-guitar-c4.mp3' },
    ]
  },
  {
    name: 'Brass',
    instruments: [
      { id: 57, name: 'Trumpet', sample: 'trumpet-c4.mp3' },
      { id: 58, name: 'Trombone', sample: 'trombone-c4.mp3' },
      { id: 59, name: 'Tuba', sample: 'tuba-c4.mp3' },
    ]
  }
];

const InstrumentBrowserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(instrumentCategories[0]);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sampler, setSampler] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Tone.js
  useEffect(() => {
    Tone.start();
    return () => {
      if (sampler) {
        sampler.dispose();
      }
    };
  }, []);

  const loadInstrument = async (instrument) => {
    setIsLoading(true);
    setSelectedInstrument(instrument);
    
    if (sampler) {
      sampler.dispose();
    }

    // In a real app, we would load actual samples here
    // For demonstration, we're using Tone.js built-in samples
    const newSampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        setIsLoading(false);
        setSampler(newSampler);
      }
    }).toDestination();
  };

  const playNote = (note = 'C4') => {
    if (sampler && sampler.loaded) {
      sampler.triggerAttackRelease(note, '2n');
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  const playChord = () => {
    if (sampler && sampler.loaded) {
      sampler.triggerAttackRelease(['C4', 'E4', 'G4'], '2n');
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Instrument Browser
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Categories */}
        <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Categories</h2>
          <ul className="space-y-2">
            {instrumentCategories.map((category) => (
              <li key={category.name}>
                <button
                  className={`w-full text-left px-3 py-2 rounded cursor-pointer ${selectedCategory.name === category.name ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Instruments */}
        <div className="md:col-span-4 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Instruments</h2>
          <ul className="space-y-2">
            {selectedCategory.instruments.map((instrument) => (
              <li key={instrument.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded cursor-pointer ${selectedInstrument?.id === instrument.id ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => loadInstrument(instrument)}
                >
                  {instrument.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Instrument Details & Playback */}
        <div className="md:col-span-5 bg-white rounded-lg shadow-md p-4">
          {selectedInstrument ? (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{selectedInstrument.name}</h2>
              
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="loader w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-blue-900">Loading instrument...</span>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Sample Playback</h3>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        className={`px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed ${isPlaying ? 'opacity-50' : ''}`}
                        onClick={() => playNote('C4')}
                        disabled={!sampler?.loaded || isPlaying}
                      >
                        Play C4
                      </button>
                      <button 
                        className={`px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed ${isPlaying ? 'opacity-50' : ''}`}
                        onClick={() => playNote('E4')}
                        disabled={!sampler?.loaded || isPlaying}
                      >
                        Play E4
                      </button>
                      <button 
                        className={`px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed ${isPlaying ? 'opacity-50' : ''}`}
                        onClick={() => playNote('G4')}
                        disabled={!sampler?.loaded || isPlaying}
                      >
                        Play G4
                      </button>
                      <button 
                        className={`px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed ${isPlaying ? 'opacity-50' : ''}`}
                        onClick={playChord}
                        disabled={!sampler?.loaded || isPlaying}
                      >
                        Play Chord
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Instrument Properties</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">MIDI Program Number:</span> {selectedInstrument.id}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Category:</span> {selectedCategory.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Sample File:</span> {selectedInstrument.sample}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-500">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <p>Select an instrument to hear its samples</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstrumentBrowserPage;