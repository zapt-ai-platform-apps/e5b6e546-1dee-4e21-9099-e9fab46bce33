import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MidiStandardsPage from './pages/MidiStandardsPage';
import InstrumentBrowserPage from './pages/InstrumentBrowserPage';
import SoundFontCreatorPage from './pages/SoundFontCreatorPage';
import DownloadPage from './pages/DownloadPage';
import LicensesPage from './pages/LicensesPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/midi-standards" element={<MidiStandardsPage />} />
            <Route path="/instruments" element={<InstrumentBrowserPage />} />
            <Route path="/creator" element={<SoundFontCreatorPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/licenses" element={<LicensesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}