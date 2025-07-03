
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import Workshop from './components/Workshop';

function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workshop" element={<Workshop/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

