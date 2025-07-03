import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import Artisan from './components/Artisan';
import Explore from './components/Explore';
import Audio from './components/Audio';
import ArtistInfo from './components/ArtistInfo';

function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Audio />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workshops" element={<Explore />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/artisan" element={<Artisan />} />
          <Route path="/artisan/:id" element={<ArtistInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


