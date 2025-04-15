import React, { useState } from 'react';

const SoundFontCreatorPage = () => {
  const [soundfontName, setSoundfontName] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('gm');
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  
  const midiStandards = [
    { id: 'gm', name: 'General MIDI' },
    { id: 'gm2', name: 'General MIDI Level 2' },
    { id: 'gs', name: 'Roland GS' },
    { id: 'xg', name: 'Yamaha XG' }
  ];
  
  const availableInstruments = [
    { id: 1, name: 'Acoustic Grand Piano', category: 'Piano' },
    { id: 2, name: 'Bright Acoustic Piano', category: 'Piano' },
    { id: 3, name: 'Electric Grand Piano', category: 'Piano' },
    { id: 9, name: 'Celesta', category: 'Chromatic Percussion' },
    { id: 10, name: 'Glockenspiel', category: 'Chromatic Percussion' },
    { id: 17, name: 'Drawbar Organ', category: 'Organ' },
    { id: 18, name: 'Percussive Organ', category: 'Organ' },
    { id: 25, name: 'Acoustic Guitar (nylon)', category: 'Guitar' },
    { id: 26, name: 'Acoustic Guitar (steel)', category: 'Guitar' },
    { id: 33, name: 'Acoustic Bass', category: 'Bass' },
    { id: 41, name: 'Violin', category: 'Strings' },
    { id: 57, name: 'Trumpet', category: 'Brass' },
    { id: 74, name: 'Flute', category: 'Pipe' },
    { id: 81, name: 'Lead 1 (square)', category: 'Synth Lead' },
  ];
  
  const toggleInstrument = (instrumentId) => {
    if (selectedInstruments.includes(instrumentId)) {
      setSelectedInstruments(selectedInstruments.filter(id => id !== instrumentId));
    } else {
      setSelectedInstruments([...selectedInstruments, instrumentId]);
    }
  };
  
  const handleCreateSoundFont = async () => {
    if (!soundfontName.trim()) {
      alert('Please enter a name for your SoundFont');
      return;
    }
    
    if (selectedInstruments.length === 0) {
      alert('Please select at least one instrument');
      return;
    }
    
    setIsCreating(true);
    
    // This would be where we'd actually create the SoundFont in a real application
    // For this demo, we'll just simulate a delay
    setTimeout(() => {
      setIsCreating(false);
      alert(`SoundFont "${soundfontName}" created successfully! You can find it in the Download section.`);
      
      // Reset form
      setSoundfontName('');
      setSelectedInstruments([]);
    }, 2000);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        SoundFont Creator
      </h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Create Your SoundFont</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* SoundFont Settings */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">SoundFont Settings</h3>
            
            <div className="mb-4">
              <label htmlFor="soundfont-name" className="block text-gray-700 font-medium mb-2">
                SoundFont Name
              </label>
              <input
                type="text"
                id="soundfont-name"
                value={soundfontName}
                onChange={(e) => setSoundfontName(e.target.value)}
                className="w-full px-4 py-2 border rounded box-border focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="My Custom SoundFont"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                MIDI Standard
              </label>
              <div className="grid grid-cols-2 gap-4">
                {midiStandards.map(standard => (
                  <div key={standard.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`standard-${standard.id}`}
                      name="midi-standard"
                      checked={selectedStandard === standard.id}
                      onChange={() => setSelectedStandard(standard.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`standard-${standard.id}`} className="text-gray-700">
                      {standard.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Explanation */}
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">How It Works</h3>
            <p className="text-gray-700 mb-4">
              Create your custom SoundFont by following these steps:
            </p>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>Name your SoundFont</li>
              <li>Select the MIDI standard you want to target</li>
              <li>Choose the instruments to include</li>
              <li>Click "Create SoundFont" to generate your file</li>
            </ol>
            <p className="mt-4 text-gray-700">
              The generated SoundFont will be available in the Download section 
              once processing is complete.
            </p>
          </div>
        </div>
        
        {/* Instrument Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Select Instruments ({selectedInstruments.length} selected)
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {availableInstruments.map(instrument => (
              <div 
                key={instrument.id}
                className={`p-3 border rounded cursor-pointer ${
                  selectedInstruments.includes(instrument.id) ? 'bg-blue-100 border-blue-900' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleInstrument(instrument.id)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedInstruments.includes(instrument.id)}
                    onChange={() => {}}
                    className="mr-2"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{instrument.name}</p>
                    <p className="text-sm text-gray-500">{instrument.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Create Button */}
        <div className="text-center">
          <button
            onClick={handleCreateSoundFont}
            disabled={isCreating}
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-lg cursor-pointer hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating SoundFont...
              </span>
            ) : "Create SoundFont"}
          </button>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">About SoundFont Creation</h2>
        <p className="text-gray-700 mb-4">
          Creating a SoundFont involves collecting high-quality samples of each instrument
          at various pitches and velocities, then mapping them correctly for playback.
        </p>
        <p className="text-gray-700 mb-4">
          Professional SoundFonts often include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Multiple velocity layers for dynamic expression</li>
          <li>Round-robin samples to prevent the "machine gun effect"</li>
          <li>Release samples for realistic note endings</li>
          <li>Detailed loop points for sustained notes</li>
          <li>Articulation samples (staccato, legato, etc.)</li>
        </ul>
        <p className="text-gray-700">
          Our tool simplifies this process by providing pre-recorded, professionally sampled 
          instruments that you can combine into custom SoundFont banks.
        </p>
      </div>
    </div>
  );
};

export default SoundFontCreatorPage;