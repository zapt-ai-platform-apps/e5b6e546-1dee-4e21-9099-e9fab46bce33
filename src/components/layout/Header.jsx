import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/explorer', label: 'SoundFont Explorer' },
    { path: '/creator', label: 'SoundFont Creator' },
    { path: '/downloads', label: 'Downloads' },
    { path: '/education', label: 'Learn' }
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxHZW5lcmFsJTIwTUlESSUyMGxvZ28lMjB3aXRoJTIwcGlhbm8lMjBrZXlib2FyZHxlbnwwfHx8fDE3NDQ3Mzg3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
              alt="SoundFont Studio Logo" 
              className="w-10 h-10" 
            />
            </div>
            
            <p className="mb-4">
              General MIDI (GM) is a standardized specification for electronic musical instruments that respond to MIDI messages. 
              Adopted in 1991, GM ensures that MIDI files sound similar regardless of the equipment used to play them.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Key Features of General MIDI:</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Standardized set of 128 instrument sounds organized into 16 families</li>
              <li>Consistent instrument mapping across all GM-compatible devices</li>
              <li>Channel 10 reserved for percussion sounds (47 standard drum sounds)</li>
              <li>Minimum polyphony of 24 notes</li>
              <li>Support for all standard MIDI controllers</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">General MIDI Program Map:</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-2">Program</th>
                    <th className="border border-slate-200 px-4 py-2">Instrument</th>
                    <th className="border border-slate-200 px-4 py-2">Family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">1-8</td>
                    <td className="border border-slate-200 px-4 py-2">Piano, Electric Piano, etc.</td>
                    <td className="border border-slate-200 px-4 py-2">Piano</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">9-16</td>
                    <td className="border border-slate-200 px-4 py-2">Glockenspiel, Music Box, etc.</td>
                    <td className="border border-slate-200 px-4 py-2">Chromatic Percussion</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">17-24</td>
                    <td className="border border-slate-200 px-4 py-2">Organ, Accordion, etc.</td>
                    <td className="border border-slate-200 px-4 py-2">Organ</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">25-32</td>
                    <td className="border border-slate-200 px-4 py-2">Acoustic Guitar, Electric Guitar, etc.</td>
                    <td className="border border-slate-200 px-4 py-2">Guitar</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">33-40</td>
                    <td className="border border-slate-200 px-4 py-2">Bass, Synth Bass, etc.</td>
                    <td className="border border-slate-200 px-4 py-2">Bass</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">...</td>
                    <td className="border border-slate-200 px-4 py-2">...</td>
                    <td className="border border-slate-200 px-4 py-2">...</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Historical Significance</h3>
              <p className="text-slate-700">
                GM was revolutionary when introduced, as it allowed MIDI files to be shared between
                different synthesizers and sound modules while maintaining reasonable consistency in
                how they sounded. Before GM, a MIDI file created on one device might sound completely
                different when played on another.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Limitations of General MIDI:</h3>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Limited to 128 instruments and 47 percussion sounds</li>
              <li>No standardization of sound quality or timbre details</li>
              <li>No support for multiple banks of instruments</li>
              <li>No control over sound synthesis parameters</li>
              <li>These limitations led to the development of enhanced standards like GM Level 2, Roland GS, and Yamaha XG</li>
            </ul>
          </div>
        )}
        
        {activeTab === 'gm2' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">General MIDI Level 2 (GM2)</h2>
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxHZW5lcmFsJTIwTUlESSUyMExldmVsJTIwMiUyMGRpYWdyYW0lMjBzaG93aW5nJTIwZW5oYW5jZWQlMjBmZWF0dXJlc3xlbnwwfHx8fDE3NDQ3Mzg3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="General MIDI Level 2 diagram showing enhanced features" 
                data-image-request="General MIDI Level 2 diagram showing enhanced features"
                className="rounded-lg w-full max-w-md h-48 object-cover mx-auto mb-4" 
              />
            </div>
            
            <p className="mb-4">
              General MIDI Level 2 (GM2) is an extension of the original GM standard, ratified in 1999.
              It addresses many of the limitations of GM1 while maintaining backward compatibility.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Enhancements in GM Level 2:</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Increased polyphony (minimum of 32 notes)</li>
              <li>Additional controllers and more precise parameter control</li>
              <li>Expanded instrument capabilities (more articulations)</li>
              <li>Standardized support for multiple banks of instruments</li>
              <li>Additional drum kits (Standard, Room, Power, Electronic, Analog, Jazz, Brush, Orchestra, SFX)</li>
              <li>Support for more MIDI controllers and effects</li>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Additional Controllers in GM2</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Fine Tuning (Controller 0)</li>
                  <li>Coarse Tuning (Controller 1)</li>
                  <li>Vibrato Rate (Controller 76)</li>
                  <li>Vibrato Depth (Controller 77)</li>
                  <li>Vibrato Delay (Controller 78)</li>
                  <li>Filter Cutoff (Controller 74)</li>
                  <li>Filter Resonance (Controller 71)</li>
                  <li>Sound Attacks (Controller 73)</li>
                  <li>Sound Brightness (Controller 74)</li>
                  <li>Sound Decay (Controller 75)</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Enhanced Sound Control</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Modulation wheel sensitivity</li>
                  <li>Distortion control</li>
                  <li>Harmonic content</li>
                  <li>Release time</li>
                  <li>Attack time</li>
                  <li>Brightness</li>
                  <li>Decay time</li>
                  <li>Vibrato rate</li>
                  <li>Vibrato depth</li>
                  <li>Vibrato delay</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Comparison with GM1:</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-2">Feature</th>
                    <th className="border border-slate-200 px-4 py-2">GM1</th>
                    <th className="border border-slate-200 px-4 py-2">GM2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Minimum Polyphony</td>
                    <td className="border border-slate-200 px-4 py-2">24 notes</td>
                    <td className="border border-slate-200 px-4 py-2">32 notes</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Instrument Variations</td>
                    <td className="border border-slate-200 px-4 py-2">Limited</td>
                    <td className="border border-slate-200 px-4 py-2">Expanded</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Controller Support</td>
                    <td className="border border-slate-200 px-4 py-2">Basic</td>
                    <td className="border border-slate-200 px-4 py-2">Enhanced</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Drum Kits</td>
                    <td className="border border-slate-200 px-4 py-2">1 standard kit</td>
                    <td className="border border-slate-200 px-4 py-2">9 defined kits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Compatibility Note</h3>
              <p className="text-slate-700">
                GM2 maintains backward compatibility with GM1. Files created for GM1 devices will play correctly
                on GM2 devices, but GM2 files may not take full advantage of the enhanced features when played
                on GM1 devices.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'gs' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Roland GS Format</h2>
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxSb2xhbmQlMjBHUyUyMHN5bnRoZXNpemVyJTIwYW5kJTIwbG9nb3xlbnwwfHx8fDE3NDQ3Mzg3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Roland GS synthesizer and logo" 
                data-image-request="Roland GS synthesizer and logo"
                className="rounded-lg w-full max-w-md h-48 object-cover mx-auto mb-4" 
              />
            </div>
            
            <p className="mb-4">
              Roland GS (GS stands for "General Sound") is an extension of the General MIDI standard developed
              by Roland Corporation in 1991. It provides additional features and capabilities while maintaining
              compatibility with the GM standard.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Key Features of Roland GS:</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Multiple variation sets for GM instruments (allowing more than 128 sounds)</li>
              <li>Enhanced drum capabilities with multiple drum kits</li>
              <li>Control over sound editing parameters (envelope, filter, etc.)</li>
              <li>Built-in effects processing (reverb, chorus, etc.)</li>
              <li>Additional System Exclusive messages for device control</li>
              <li>Backward compatibility with General MIDI</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Roland's Innovation</h3>
              <p className="text-slate-700">
                Roland was one of the first companies to address the limitations of the original GM standard
                with their GS format. Many of Roland's Sound Canvas series of sound modules featured GS
                compatibility, which made them popular choices for MIDI composition and playback in the 1990s.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">GS Extensions Beyond GM:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Instrument Variations</h3>
                <p className="text-sm mb-2">
                  GS extends beyond the 128 GM instruments by using variation banks. For example:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Multiple acoustic piano variations</li>
                  <li>Additional electric guitar sounds</li>
                  <li>Extended orchestral instruments</li>
                  <li>More realistic instrumental articulations</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Effects Control</h3>
                <p className="text-sm mb-2">
                  GS adds extensive effects processing capabilities:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Multiple reverb types and parameters</li>
                  <li>Chorus depth and rate control</li>
                  <li>Delay effects with feedback control</li>
                  <li>Effects routing options</li>
                  <li>Per-channel effect send levels</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">GS in Modern Music Production:</h3>
            
            <p className="mb-4">
              While newer technologies have emerged, GS remains relevant in several contexts:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Legacy MIDI file compatibility and playback</li>
              <li>Game development, particularly for titles targeting broader device compatibility</li>
              <li>Educational software where consistent playback is essential</li>
              <li>Hardware synthesizers and sound modules that maintain the standard</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Industry Impact</h3>
              <p className="text-slate-700">
                Roland's GS format significantly influenced the development of GM Level 2 and other extended MIDI
                standards. Many features first introduced in GS were later incorporated into official MIDI standards.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'xg' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Yamaha XG Format</h2>
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxZYW1haGElMjBYRyUyMHN5bnRoZXNpemVyJTIwa2V5Ym9hcmR8ZW58MHx8fHwxNzQ0NzM4Nzc2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Yamaha XG synthesizer keyboard" 
                data-image-request="Yamaha XG synthesizer keyboard"
                className="rounded-lg w-full max-w-md h-48 object-cover mx-auto mb-4" 
              />
            </div>
            
            <p className="mb-4">
              Yamaha XG (Extended General MIDI) is a comprehensive extension of the General MIDI standard
              developed by Yamaha Corporation in 1994. It offers extensive sound control capabilities
              while maintaining compatibility with the GM standard.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Key Features of Yamaha XG:</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Greatly expanded sound set with multiple banks (480+ voices in full implementation)</li>
              <li>Detailed control over voice parameters (envelope, filter, EQ, etc.)</li>
              <li>Advanced multi-effects processing with 62 effect types</li>
              <li>Multiple drum kits with extensive editing capabilities</li>
              <li>Harmonic imaging technology for more realistic sound reproduction</li>
              <li>Backward compatibility with General MIDI</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">XG's Comprehensive Approach</h3>
              <p className="text-slate-700">
                XG represented the most extensive expansion of the GM standard at its time. Yamaha
                designed XG to offer professional-level sound control within the MIDI framework, making
                it particularly popular for professional MIDI compositions and arrangements.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">XG Advanced Features:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Voice Architecture</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Multiple element voices</li>
                  <li>Detailed envelope generators (6-stage)</li>
                  <li>Multiple filter types with resonance</li>
                  <li>Amplitude and filter modulation</li>
                  <li>Low frequency oscillators (LFOs)</li>
                  <li>Micro-tuning capabilities</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Effects System</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Insertion effects (per-channel)</li>
                  <li>System effects (reverb, chorus)</li>
                  <li>Master EQ (5-band)</li>
                  <li>62 effect types including:</li>
                  <li className="ml-4">- Multiple reverb algorithms</li>
                  <li className="ml-4">- Delays and echoes</li>
                  <li className="ml-4">- Distortion and amp simulators</li>
                  <li className="ml-4">- Modulation effects</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Comparison with Other Standards:</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-2">Feature</th>
                    <th className="border border-slate-200 px-4 py-2">GM</th>
                    <th className="border border-slate-200 px-4 py-2">Roland GS</th>
                    <th className="border border-slate-200 px-4 py-2">Yamaha XG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Voice Count</td>
                    <td className="border border-slate-200 px-4 py-2">128</td>
                    <td className="border border-slate-200 px-4 py-2">~220</td>
                    <td className="border border-slate-200 px-4 py-2">480+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Drum Kits</td>
                    <td className="border border-slate-200 px-4 py-2">1</td>
                    <td className="border border-slate-200 px-4 py-2">9</td>
                    <td className="border border-slate-200 px-4 py-2">11+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Effect Types</td>
                    <td className="border border-slate-200 px-4 py-2">None specified</td>
                    <td className="border border-slate-200 px-4 py-2">~20</td>
                    <td className="border border-slate-200 px-4 py-2">62</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Parameter Control</td>
                    <td className="border border-slate-200 px-4 py-2">Basic</td>
                    <td className="border border-slate-200 px-4 py-2">Moderate</td>
                    <td className="border border-slate-200 px-4 py-2">Extensive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Legacy and Influence</h3>
              <p className="text-slate-700">
                XG technology was featured in many Yamaha synthesizers, sound cards, and mobile devices.
                While newer technologies have emerged, XG files are still supported in many music
                applications, and the XG approach to sound design influenced later software synthesizers
                and virtual instruments.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'soundfont' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">SoundFont Technology</h2>
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1505178041309-ad46d2e4207b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxTb3VuZEZvbnQlMjBzdHJ1Y3R1cmUlMjBkaWFncmFtJTIwc2hvd2luZyUyMHNhbXBsZXMlMkMlMjBwcmVzZXRzJTIwYW5kJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzQ0NzM4Nzc3fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="SoundFont structure diagram showing samples, presets and instruments" 
                data-image-request="SoundFont structure diagram showing samples, presets and instruments"
                className="rounded-lg w-full max-w-md h-48 object-cover mx-auto mb-4" 
              />
            </div>
            
            <p className="mb-4">
              SoundFont is a file format and technology developed by E-mu Systems and Creative Labs in the 1990s
              for storing sample-based synthesizer data. It revolutionized computer audio by bringing high-quality
              instrument sounds to consumer sound cards.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">SoundFont File Format:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">SoundFont 2 (.sf2)</h3>
                <p className="text-sm">
                  The most widely used format, introduced in 1996. SF2 files contain sample data,
                  instrument definitions, and preset information in an uncompressed format.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">SoundFont 3 (.sf3)</h3>
                <p className="text-sm">
                  An extension that allows for FLAC-compressed audio samples, significantly reducing
                  file size while maintaining audio quality.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">SFZ Format (.sfz)</h3>
                <p className="text-sm">
                  A text-based alternative to SoundFont, developed by Cakewalk. Uses plain text files
                  to define how samples are mapped and processed.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">SoundFont Structure:</h3>
            
            <p className="mb-4">
              SoundFont files have a hierarchical structure consisting of three main components:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-2">Component</th>
                    <th className="border border-slate-200 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Samples</td>
                    <td className="border border-slate-200 px-4 py-2">
                      Raw audio recordings (typically 16-bit PCM) that serve as the building blocks for instruments.
                      These can include individual notes, loops, or multi-sampled recordings across various velocities.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Instruments</td>
                    <td className="border border-slate-200 px-4 py-2">
                      Collections of samples with parameters defining how they're mapped across the keyboard,
                      velocity ranges, modulation, and other playback characteristics.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Presets</td>
                    <td className="border border-slate-200 px-4 py-2">
                      The top level of organization, corresponding to MIDI program numbers. Presets can combine
                      multiple instruments with layering and keyboard splits to create complex sounds.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">SoundFont Parameters:</h3>
            
            <p className="mb-4">
              SoundFonts offer detailed control over sound generation through various parameters:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-2">Sample Parameters:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Sample rate and bit depth</li>
                  <li>Loop points (start, end, type)</li>
                  <li>Original pitch and tuning</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Instrument Parameters:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Key range (note mapping)</li>
                  <li>Velocity range sensitivity</li>
                  <li>Envelope generators (volume, filter)</li>
                  <li>Low-frequency oscillators (LFOs)</li>
                  <li>Filter settings (cutoff, resonance)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">MIDI Standard Compatibility</h3>
              <p className="text-slate-700">
                SoundFonts are often designed to work with specific MIDI standards:
              </p>
              <ul className="list-disc pl-6 mt-2 text-slate-700">
                <li>General MIDI SoundFonts follow the standard GM program map</li>
                <li>GS SoundFonts may include Roland-specific variations and drum maps</li>
                <li>XG SoundFonts can include the extended Yamaha voice set and effects</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">SoundFont Usage:</h3>
            
            <p className="mb-4">
              SoundFonts are used in various applications:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Hardware synthesizers and sound cards</li>
              <li>Software synthesizers and samplers</li>
              <li>Digital audio workstations</li>
              <li>Game development</li>
              <li>Mobile applications with MIDI playback</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Creating SoundFonts</h3>
              <p className="text-slate-700">
                Creating high-quality SoundFonts involves careful sampling, editing, and programming.
                Key considerations include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
                <li>Recording or obtaining clean samples</li>
                <li>Properly setting loop points to avoid clicks or artifacts</li>
                <li>Mapping samples across appropriate key and velocity ranges</li>
                <li>Setting envelope and filter parameters for natural sound</li>
                <li>Optimizing for file size vs. sound quality</li>
                <li>Ensuring compliance with the intended MIDI standard</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'copyright' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Copyright & Licensing Considerations</h2>
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1590031614432-bbf2fd253f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxDb3B5cmlnaHQlMjBhbmQlMjBsaWNlbnNpbmclMjBzeW1ib2xzJTIwYW5kJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc0NDczODc3N3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Copyright and licensing symbols and documents" 
                data-image-request="Copyright and licensing symbols and documents"
                className="rounded-lg w-full max-w-md h-48 object-cover mx-auto mb-4" 
              />
            </div>
            
            <p className="mb-4">
              When working with SoundFonts and MIDI files, it's important to understand the copyright
              and licensing implications. Creating, distributing, and using these files involves
              various legal considerations.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">SoundFont Copyright Issues:</h3>
            
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-red-800 mb-2">Important Legal Notice</h3>
              <p className="text-slate-700">
                SoundFonts contain audio samples that may be subject to copyright protection.
                Creating a SoundFont using samples from commercial products, recordings, or other
                protected sources without permission may constitute copyright infringement.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Copyright Components in SoundFonts:</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-2">Component</th>
                    <th className="border border-slate-200 px-4 py-2">Copyright Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Audio Samples</td>
                    <td className="border border-slate-200 px-4 py-2">
                      Individual recordings are protected by copyright. Using samples from commercial libraries,
                      recordings, or instruments requires permission from the copyright holder.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Instrument Programming</td>
                    <td className="border border-slate-200 px-4 py-2">
                      The way samples are organized, programmed, and mapped may be considered creative work
                      subject to copyright protection.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">Brand Names & Trademarks</td>
                    <td className="border border-slate-200 px-4 py-2">
                      Using brand names of instruments (e.g., "Steinway Piano," "Stradivarius Violin")
                      in SoundFont names may infringe on trademarks.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Common License Types:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Creative Commons Licenses</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li><span className="font-medium">CC0 (Public Domain):</span> No rights reserved</li>
                  <li><span className="font-medium">CC-BY:</span> Attribution required</li>
                  <li><span className="font-medium">CC-BY-SA:</span> Attribution + Share-Alike</li>
                  <li><span className="font-medium">CC-BY-NC:</span> Non-commercial use only</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Commercial Licenses</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li><span className="font-medium">Personal Use:</span> For individual, non-commercial use only</li>
                  <li><span className="font-medium">Single Project:</span> Limited to one specific project</li>
                  <li><span className="font-medium">Developer License:</span> For use in multiple projects</li>
                  <li><span className="font-medium">Distribution License:</span> Required for including in applications</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Legal Sources for SoundFont Creation:</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Samples you've recorded yourself</li>
              <li>Public domain audio recordings</li>
              <li>Sample libraries with explicit permission for SoundFont creation</li>
              <li>Commercially licensed sample packs that permit redistribution</li>
              <li>Commissioned recordings where you've acquired the rights</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Best Practices:</h3>
            
            <div className="p-4 bg-green-50 rounded-lg mb-6">
              <h3 className="font-semibold text-green-800 mb-2">Recommended Approaches</h3>
              <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                <li>Always create clear documentation for your SoundFont, including license terms</li>
                <li>Keep records of sample sources and permissions</li>
                <li>When using others' SoundFonts, respect their license terms</li>
                <li>Consider using explicitly labeled royalty-free samples for commercial projects</li>
                <li>When in doubt, consult with a legal professional familiar with intellectual property</li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Disclaimer</h3>
              <p className="text-slate-700">
                This information is provided for educational purposes only and does not constitute
                legal advice. Copyright laws vary by country and jurisdiction. For specific legal
                questions about SoundFont creation, distribution, or usage, please consult with a
                qualified attorney specialized in intellectual property law.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}