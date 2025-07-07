import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg.jpg'; 
import Video from '../assets/video.avif';
import Reel from '../assets/reel.webp';
import BTS from '../assets/bts.jpg';

const ArtistDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [portfolio, setPortfolio] = useState(null);
  const [collaborators, setCollaborators] = useState([]);
  const [newCollaborator, setNewCollaborator] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [savedData, setSavedData] = useState(null);
  const [views] = useState(234);
  const [hearts] = useState(56);

  const navigate = useNavigate();

  const handlePortfolioUpload = (e) => {
    setPortfolio(URL.createObjectURL(e.target.files[0]));
  };

  const addCollaborator = () => {
    if (newCollaborator.trim()) {
      setCollaborators([...collaborators, newCollaborator]);
      setNewCollaborator('');
    }
  };

  const handleSave = () => {
    const data = {
      title,
      description,
      location,
      isOnline,
      collaborators,
      email,
      phone,
      portfolio,
    };
    setSavedData(data);
    alert('Changes Saved!');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen w-full px-6 py-10 font-sans text-gray-800">
        {/* Header */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center px-10 py-4 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-10"
        >
          <Link to="/" className="text-xl font-bold text-gray-900 flex items-center gap-2 hover:text-orange-600 transition">
            Hunar
          </Link>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/about" className="hover:text-orange-600">About Us</Link>
            <Link to="/artisan" className="hover:text-orange-600">Explore Artisans</Link>
            <Link to="/contact" className="hover:text-orange-600">Contact Us</Link>
          </nav>
          <div className="space-x-3">
            <Link to="/">
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log Out</button>
            </Link>
          </div>
        </motion.header>

        {/* Content Box */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Workshop Details</h2>
          <p className="text-sm text-gray-600 mb-6">Edit your workshop information to attract more participants.</p>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Workshop Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-4 py-2 rounded-md" />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Workshop Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border px-4 py-2 rounded-md"></textarea>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border px-4 py-2 rounded-md" />
          </div>

          {/* Online */}
          <div className="mb-6 flex items-center gap-2">
            <label className="text-sm font-medium">Online Workshop</label>
            <input type="checkbox" checked={isOnline} onChange={() => setIsOnline(!isOnline)} />
          </div>

          {/* Portfolio */}
          <div className="mb-8 border-dashed border-2 p-6 rounded-md border-gray-300">
            <p className="text-sm font-medium mb-2">Upload Portfolio</p>
            <input type="file" accept="image/*" onChange={handlePortfolioUpload} />
            {portfolio && <img src={portfolio} alt="Portfolio Preview" className="mt-4 w-full h-40 object-cover rounded-md" />}
          </div>

          {/* Collaborators */}
          <div className="mb-8 border-dashed border-2 p-6 rounded-md border-gray-300">
            <p className="text-sm font-medium mb-2">Add Collaborators</p>
            <div className="flex gap-2 mb-2">
              <input type="text" value={newCollaborator} onChange={(e) => setNewCollaborator(e.target.value)} className="border px-3 py-2 rounded-md w-full" placeholder="Collaborator name or email" />
              <button onClick={addCollaborator} className="bg-orange-500 text-white px-4 rounded-md">Add</button>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {collaborators.map((col, idx) => <li key={idx}>{col}</li>)}
            </ul>
          </div>

          {/* Analytics */}
          <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border px-4 py-3 rounded-md text-center bg-white shadow">
              <p className="text-sm text-gray-500">Views</p>
              <p className="text-xl font-bold">{views}</p>
            </div>
            <div className="border px-4 py-3 rounded-md text-center bg-white shadow">
              <p className="text-sm text-gray-500">Hearts</p>
              <p className="text-xl font-bold">{hearts}</p>
            </div>
            <div className="border px-4 py-3 rounded-md text-center bg-white shadow">
              <p className="text-sm text-gray-500">Participants</p>
              <p className="text-xl font-bold">39</p>
            </div>
            <div className="border px-4 py-3 rounded-md text-center bg-white shadow">
              <p className="text-sm text-gray-500">Engagement</p>
              <p className="text-xl font-bold">89%</p>
            </div>
          </div>

          {/* Storyboard */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Storyboard</h3>
            <div className="grid grid-cols-3 gap-4">
              {[Video, Reel, BTS].map((src, i) => (
                <div key={i}>
                  <img src={src} alt="Storyboard" className="rounded-lg w-full h-32 object-cover" />
                  <p className="text-sm text-center mt-1">{['Workshop Video', 'Promotional Reel', 'Behind the Scenes'][i]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-4 py-2 rounded-md mb-2" />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-4 py-2 rounded-md" />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button onClick={handleSave} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">Save Changes</button>
            <button
              onClick={() => navigate('/artist/storyboard')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md transition"
            >
              View Storyboard
            </button>
          </div>

          {/* Saved Summary */}
          {savedData && (
            <div className="mt-10 border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Saved Workshop Summary</h3>
              <p><strong>Title:</strong> {savedData.title}</p>
              <p><strong>Description:</strong> {savedData.description}</p>
              <p><strong>Location:</strong> {savedData.location}</p>
              <p><strong>Mode:</strong> {savedData.isOnline ? 'Online' : 'Offline'}</p>
              <p><strong>Email:</strong> {savedData.email}</p>
              <p><strong>Phone:</strong> {savedData.phone}</p>
              <p><strong>Collaborators:</strong> {savedData.collaborators.join(', ') || 'None'}</p>
              {savedData.portfolio && (
                <div className="mt-4">
                  <p className="font-medium mb-1">Portfolio Image:</p>
                  <img src={savedData.portfolio} alt="Saved Portfolio" className="w-full max-w-md rounded-md shadow-md" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;
