export const soundfonts = [
  {
    id: 'gm-soundfont',
    name: 'FluidR3 GM SoundFont',
    description: 'A high-quality General MIDI soundfont created by Frank Wen, suitable for a wide range of music genres.',
    standard: 'GM',
    format: 'SF2',
    size: '141 MB',
    instrumentCount: 128,
    sampleCount: '1936',
    license: 'MIT License',
    author: 'Frank Wen',
    banks: [
      {
        number: 0,
        name: 'Melodic Bank',
        instruments: [
          {
            program: 0,
            name: 'Acoustic Grand Piano',
            category: 'Piano',
            description: 'High-quality multi-sampled concert grand piano',
            sampleCount: 24,
            layers: 3
          },
          {
            program: 1,
            name: 'Bright Acoustic Piano',
            category: 'Piano',
            description: 'Brighter variant with more prominent high frequencies',
            sampleCount: 18,
            layers: 2
          },
          {
            program: 24,
            name: 'Acoustic Guitar (nylon)',
            category: 'Guitar',
            description: 'Classical guitar with nylon strings',
            sampleCount: 16,
            layers: 2
          },
          {
            program: 25,
            name: 'Acoustic Guitar (steel)',
            category: 'Guitar',
            description: 'Steel-string acoustic guitar',
            sampleCount: 14,
            layers: 2
          },
          {
            program: 40,
            name: 'Violin',
            category: 'Strings',
            description: 'Solo violin with vibrato',
            sampleCount: 12,
            layers: 2
          },
          {
            program: 56,
            name: 'Trumpet',
            category: 'Brass',
            description: 'Solo trumpet with moderate brightness',
            sampleCount: 10,
            layers: 2
          }
        ]
      },
      {
        number: 128,
        name: 'Percussion Bank',
        instruments: [
          {
            program: 0,
            name: 'Standard Drum Kit',
            category: 'Drums',
            description: 'General MIDI standard drum kit with 47 percussion sounds',
            sampleCount: 47,
            layers: 1
          },
          {
            program: 1,
            name: 'Room Kit',
            category: 'Drums',
            description: 'Drum kit with more room ambience',
            sampleCount: 42,
            layers: 1
          }
        ]
      }
    ]
  },
  {
    id: 'gs-soundfont',
    name: 'Roland GS Compatible SoundFont',
    description: 'A comprehensive soundfont that follows the Roland GS specification with extended instrument variations.',
    standard: 'GS',
    format: 'SF2',
    size: '235 MB',
    instrumentCount: 187,
    sampleCount: '2514',
    license: 'Personal Use Only',
    author: 'Sound Canvas Emulation Project',
    banks: [
      {
        number: 0,
        name: 'Melodic Bank (GS)',
        instruments: [
          {
            program: 0,
            name: 'Piano 1',
            category: 'Piano',
            description: 'Roland GS-compatible piano sound',
            sampleCount: 28,
            layers: 4
          },
          {
            program: 24,
            name: 'Nylon Guitar',
            category: 'Guitar',
            description: 'Classical guitar with GS extended range',
            sampleCount: 18,
            layers: 3
          }
        ]
      },
      {
        number: 8,
        name: 'Piano Variations',
        instruments: [
          {
            program: 0,
            name: 'Piano 1 (Wide)',
            category: 'Piano',
            description: 'Stereo enhanced piano with wider image',
            sampleCount: 28,
            layers: 4
          },
          {
            program: 1,
            name: 'Piano 1 (Dark)',
            category: 'Piano',
            description: 'Warmer piano tone with reduced highs',
            sampleCount: 22,
            layers: 3
          }
        ]
      }
    ]
  },
  {
    id: 'xg-soundfont',
    name: 'Yamaha XG Professional',
    description: 'A comprehensive soundfont compatible with Yamaha XG standard, featuring extensive instrument variations and effects.',
    standard: 'XG',
    format: 'SF2',
    size: '320 MB',
    instrumentCount: 480,
    sampleCount: '3850',
    license: 'Commercial License Required',
    author: 'XG Sound Project',
    banks: [
      {
        number: 0,
        name: 'XG Melodic Bank',
        instruments: [
          {
            program: 0,
            name: 'Grand Piano',
            category: 'Piano',
            description: 'Yamaha XG compliant grand piano',
            sampleCount: 36,
            layers: 5
          }
        ]
      },
      {
        number: 1,
        name: 'XG Variation Bank',
        instruments: [
          {
            program: 0,
            name: 'Grand Piano (Bright)',
            category: 'Piano',
            description: 'Brighter variant of the XG grand piano',
            sampleCount: 32,
            layers: 4
          }
        ]
      }
    ]
  },
  {
    id: 'gm2-soundfont',
    name: 'GM Level 2 Complete',
    description: 'A comprehensive soundfont compatible with GM Level 2 standard, featuring enhanced sound quality and articulations.',
    standard: 'GM2',
    format: 'SF2',
    size: '180 MB',
    instrumentCount: 256,
    sampleCount: '2200',
    license: 'CC-BY-SA',
    author: 'GM2 Project Team',
    banks: [
      {
        number: 0,
        name: 'GM2 Melodic Bank',
        instruments: [
          {
            program: 0,
            name: 'Acoustic Grand Piano',
            category: 'Piano',
            description: 'GM Level 2 enhanced grand piano',
            sampleCount: 30,
            layers: 4
          }
        ]
      }
    ]
  },
  {
    id: 'orchestral-soundfont',
    name: 'Symphonic Orchestra',
    description: 'A high-quality orchestral soundfont with detailed string, brass, woodwind, and percussion sections.',
    standard: 'GM',
    format: 'SF2',
    size: '275 MB',
    instrumentCount: 68,
    sampleCount: '1560',
    license: 'Personal Use Only',
    author: 'Virtual Philharmonic',
    banks: [
      {
        number: 0,
        name: 'Orchestra Bank',
        instruments: [
          {
            program: 40,
            name: 'Violin Section',
            category: 'Strings',
            description: 'Full violin section with multiple articulations',
            sampleCount: 42,
            layers: 3
          }
        ]
      }
    ]
  },
  {
    id: 'vintage-synth',
    name: 'Classic Synthesizers Collection',
    description: 'A collection of samples from iconic vintage synthesizers from the 70s, 80s, and 90s.',
    standard: 'GM',
    format: 'SF2',
    size: '145 MB',
    instrumentCount: 96,
    sampleCount: '1024',
    license: 'CC-BY',
    author: 'Retro Synth Archive',
    banks: [
      {
        number: 0,
        name: 'Vintage Synths',
        instruments: [
          {
            program: 80,
            name: 'Analog Pad',
            category: 'Synth Pad',
            description: 'Warm analog synthesizer pad',
            sampleCount: 16,
            layers: 2
          }
        ]
      }
    ]
  }
];