import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import Creator from './pages/Creator';
import Downloads from './pages/Downloads';
import Education from './pages/Education';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}