import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const soundfontLibrary = [
  {
    id: 'gm_basic',
    name: 'GM Basic SoundFont',
    description: 'A complete General MIDI compatible SoundFont with all 128 instruments and standard drum kits.',
    size: '24 MB',
    standard: 'General MIDI',
    lastUpdated: '2023-05-15',
    downloadCount: 12845
  },
  {
    id: 'piano_collection',
    name: 'Piano Collection',
    description: 'High-quality piano samples including concert grands, uprights, and electric pianos.',
    size: '56 MB',
    standard: 'General MIDI Level 2',
    lastUpdated: '2023-06-22',
    downloadCount: 8932
  },
  {
    id: 'orchestral_complete',
    name: 'Orchestral Complete',
    description: 'Professional orchestral instrument collection featuring detailed strings, brass, woodwinds, and percussion.',
    size: '124 MB',
    standard: 'Yamaha XG',
    lastUpdated: '2023-04-10',
    downloadCount: 7561
  },
  {
    id: 'vintage_synths',
    name: 'Vintage Synthesizers',
    description: 'Classic analog and digital synthesizer sounds from the 70s, 80s, and 90s.',
    size: '38 MB',
    standard: 'Roland GS',
    lastUpdated: '2023-07-05',
    downloadCount: 9247
  },
  {
    id: 'world_instruments',
    name: 'World Instruments',
    description: 'Exotic instruments from around the globe including Asian, African, and Middle Eastern instruments.',
    size: '72 MB',
    standard: 'General MIDI',
    lastUpdated: '2023-03-18',
    downloadCount: 5128
  },
  {
    id: 'drum_machines',
    name: 'Classic Drum Machines',
    description: 'Legendary drum machine sounds from the most iconic electronic music hardware.',
    size: '31 MB',
    standard: 'Roland GS',
    lastUpdated: '2023-05-30',
    downloadCount: 11362
  }
];

const DownloadPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStandard, setFilterStandard] = useState('all');
  const [downloadingId, setDownloadingId] = useState(null);
  
  const filteredSoundfonts = soundfontLibrary.filter(soundfont => {
    const matchesSearch = soundfont.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          soundfont.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStandard = filterStandard === 'all' || soundfont.standard.includes(filterStandard);
    return matchesSearch && matchesStandard;
  });
  
  const handleDownload = (id) => {
    setDownloadingId(id);
    
    // Simulate download process
    setTimeout(() => {
      setDownloadingId(null);
      
      // In a real application, this would trigger a file download
      alert(`Download started for ${soundfontLibrary.find(sf => sf.id === id).name}`);
    }, 1500);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Download SoundFonts
      </h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-gray-700 font-medium mb-2">
              Search SoundFonts
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded box-border focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Search by name or description..."
            />
          </div>
          
          {/* Filter */}
          <div className="md:w-1/3">
            <label htmlFor="filter" className="block text-gray-700 font-medium mb-2">
              Filter by Standard
            </label>
            <select
              id="filter"
              value={filterStandard}
              onChange={(e) => setFilterStandard(e.target.value)}
              className="w-full px-4 py-2 border rounded box-border focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="all">All Standards</option>
              <option value="General MIDI">General MIDI</option>
              <option value="General MIDI Level 2">General MIDI Level 2</option>
              <option value="Roland GS">Roland GS</option>
              <option value="Yamaha XG">Yamaha XG</option>
            </select>
          </div>
        </div>
        
        {/* SoundFont List */}
        <div className="space-y-6">
          {filteredSoundfonts.length > 0 ? (
            filteredSoundfonts.map(soundfont => (
              <div key={soundfont.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{soundfont.name}</h3>
                    <p className="text-gray-700 mb-3">{soundfont.description}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                      <p><span className="font-medium">Size:</span> {soundfont.size}</p>
                      <p><span className="font-medium">Standard:</span> {soundfont.standard}</p>
                      <p><span className="font-medium">Updated:</span> {soundfont.lastUpdated}</p>
                      <p><span className="font-medium">Downloads:</span> {soundfont.downloadCount.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleDownload(soundfont.id)} 
                      disabled={downloadingId === soundfont.id}
                      className="px-6 py-3 bg-blue-900 text-white rounded-lg cursor-pointer hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {downloadingId === soundfont.id ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl">No SoundFonts found matching your search criteria</p>
              <p className="mt-2">Try adjusting your search or filter settings</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Using SoundFonts</h2>
          <p className="text-gray-700 mb-4">
            After downloading a SoundFont (.sf2) file, you can use it in various music applications:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Digital Audio Workstations (DAWs) like FL Studio, Ableton Live, or REAPER</li>
            <li>Software samplers like sforzando, Viena, or Plogue sforzando</li>
            <li>Hardware samplers that support SoundFont format</li>
            <li>Virtual MIDI synthesizers like VirtualMIDISynth</li>
            <li>Mobile apps that support SoundFont playback</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Custom SoundFonts</h2>
          <p className="text-gray-700 mb-4">
            Can't find what you're looking for? Create your own custom SoundFont with exactly the
            instruments you need.
          </p>
          <p className="text-gray-700 mb-6">
            Our SoundFont Creator tool allows you to build professional-quality SoundFonts
            by selecting instruments from our extensive sample library.
          </p>
          <div>
            <Link to="/creator" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-800">
              Create Custom SoundFont
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;