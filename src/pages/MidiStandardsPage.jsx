import React from 'react';

const MidiStandardsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        MIDI Standards
      </h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">General MIDI (GM)</h2>
        <p className="text-gray-700 mb-4">
          General MIDI is a standardized specification for electronic musical instruments that respond to MIDI messages. 
          GM was established in 1991 and ensures that a MIDI file will sound reasonable when played back on any GM-compatible device.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Key Features:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>128 standard instrument sounds organized into 16 families</li>
            <li>Standard percussion key map on channel 10</li>
            <li>Minimum 24-voice polyphony</li>
            <li>Support for all 16 MIDI channels</li>
            <li>Consistent volume and pan settings</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">General MIDI Level 2 (GM2)</h2>
        <p className="text-gray-700 mb-4">
          GM Level 2 is an extension of the original General MIDI specification, introduced in 1999. 
          It added more features and capabilities while maintaining compatibility with the original GM standard.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Key Improvements:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Expanded to 32-voice polyphony minimum</li>
            <li>Added standardized controller responses for more expressive playing</li>
            <li>Defined more specific instrument capabilities</li>
            <li>Added additional sound variations for instruments</li>
            <li>Improved drum sounds with more detailed articulation</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Roland GS</h2>
        <p className="text-gray-700 mb-4">
          Roland GS (General Sound) is Roland's extension to the General MIDI standard, introduced in 1991. 
          It adds more instruments, drum kits, and sound editing capabilities while remaining compatible with GM.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Key Features:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Additional instrument variations beyond the basic 128 GM sounds</li>
            <li>Multiple drum kits beyond the standard GM percussion set</li>
            <li>Sound editing parameters for modifying instrument sounds</li>
            <li>Effects processing including reverb and chorus</li>
            <li>Special control messages for Roland-specific features</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Yamaha XG</h2>
        <p className="text-gray-700 mb-4">
          Yamaha XG (Extended General MIDI) is Yamaha's extension to the General MIDI standard, introduced in 1994. 
          It provides extensive sound editing capabilities and a much larger sound set while maintaining GM compatibility.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Key Features:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Significantly expanded sound set with hundreds of instrument variations</li>
            <li>Multiple drum kits and percussion sets</li>
            <li>Extensive sound editing parameters</li>
            <li>Advanced effects processing with multiple insertion effects</li>
            <li>Detailed control over instrument articulation and expression</li>
            <li>Special controller messages for extended features</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Choosing the Right MIDI Standard</h2>
        <p className="text-gray-700 mb-4">
          When creating SoundFonts, it's important to understand which MIDI standard you're targeting:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li><strong>General MIDI</strong>: The most basic and widely compatible option</li>
          <li><strong>GM Level 2</strong>: Better quality and more expressive, still widely compatible</li>
          <li><strong>Roland GS</strong>: Good for Roland hardware and software</li>
          <li><strong>Yamaha XG</strong>: Excellent for Yamaha hardware and software with the most detailed control</li>
        </ul>
        <p className="text-gray-700">
          Our SoundFont creator allows you to create banks that conform to any of these standards, 
          ensuring your sounds will work correctly with your target hardware and software.
        </p>
      </div>
    </div>
  );
};

export default MidiStandardsPage;