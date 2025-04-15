# SoundFont Studio

A comprehensive application for exploring, creating, and downloading SoundFont files that adhere to various MIDI standards including General MIDI, GM Level 2, Roland GS, and Yamaha XG.

## Features

- **SoundFont Explorer**: Browse and preview different SoundFont files with instruments organized by banks and categories
- **SoundFont Creator**: Build custom SoundFonts by selecting instruments and configuring samples
- **Downloads**: Access a collection of high-quality SoundFont files for various MIDI standards
- **Educational Content**: Learn about the differences between MIDI standards and SoundFont technology

## Technologies Used

- React
- React Router
- Tailwind CSS
- SoundFont Player
- Tone.js
- File Saver

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```
npm run build
```

This will generate optimized production files in the `dist` directory.

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Main application pages
- `/src/data` - Data files for SoundFonts and instrument definitions
- `/src/utils` - Utility functions for audio processing and file handling

## License

This project is licensed under the MIT License - see the LICENSE file for details.