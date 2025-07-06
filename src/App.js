import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import Artisan from './components/Artisan';
import Explore from './components/Explore';
import Audio from './components/Audio';
import ArtistInfo from './components/ArtistInfo';
import CraftInfo from './components/CraftInfo';
import ArtistDashboard from './components/ArtistDashboard';
import ArtistStoryboard from './components/ArtistStoryboard';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Audio />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/workshops" element={<Explore />} />
          <Route path="/workshop/:id" element={<CraftInfo/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/artist-dashboard" element={<ArtistDashboard />} />
          <Route path="/artisan" element={<Artisan />} />
          <Route path="/artisan/:id" element={<ArtistInfo />} />
          <Route path="/artist/storyboard/" element={<ArtistStoryboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


