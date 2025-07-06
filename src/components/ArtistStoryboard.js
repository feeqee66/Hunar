import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';
import Priya from '../assets/Priya.jpeg';
import Priya1 from '../assets/priya1.jpg';
import Priya2 from '../assets/priya2.jpg';
import Priya3 from '../assets/priya3.jpg';
import Priya4 from '../assets/priya4.webp';
import Priya5 from '../assets/priya5.jpg';
import Priya6 from '../assets/priya6.jpeg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const ArtistStoryboard = () => {
  const [activeTab, setActiveTab] = useState('Media');
  const [media, setMedia] = useState([
    Priya1,
    Priya2,
    Priya3,
    Priya4,
    Priya5,
    Priya6
  ]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setMedia([...media, newUrl]);
    }
  };

  const analyticsData = [
    { name: 'Mon', Views: 400, Likes: 240, Shares: 100 },
    { name: 'Tue', Views: 300, Likes: 139, Shares: 200 },
    { name: 'Wed', Views: 200, Likes: 980, Shares: 150 },
    { name: 'Thu', Views: 278, Likes: 390, Shares: 90 },
    { name: 'Fri', Views: 189, Likes: 480, Shares: 120 },
    { name: 'Sat', Views: 239, Likes: 380, Shares: 130 },
    { name: 'Sun', Views: 349, Likes: 430, Shares: 160 },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="min-h-screen px-4 py-10 font-sans text-gray-800">
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

        {/* Artist Info */}
        <div className="text-center mb-8 bg-white/90 rounded-xl max-w-md mx-auto py-6 px-4 shadow-md">
          <img
            src={Priya}
            alt="Priya Sharma"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h2 className="text-2xl font-bold mt-2">Priya Sharma</h2>
          <p className="text-sm text-gray-500">Potter from Jaipur, India</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 border-b bg-white/90 mx-4 rounded-t-md shadow-sm">
          {['Media', 'Analytics', 'About'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Media Tab */}
        {activeTab === 'Media' && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 px-4">
              {media.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="craft"
                  className="w-full h-40 object-cover rounded-md shadow-sm"
                />
              ))}
            </div>

            <div className="border border-dashed border-gray-300 p-6 rounded-md text-center mx-4 mb-10 bg-white/90 shadow-sm">
              <p className="text-sm font-medium mb-1">Upload your first media</p>
              <p className="text-xs text-gray-500 mb-3">Share your work with the world</p>
              <label className="cursor-pointer px-4 py-2 bg-gray-200 rounded-md font-medium inline-block">
                Upload
                <input type="file" accept="image/*" hidden onChange={handleUpload} />
              </label>
            </div>
          </>
        )}

        {/* Analytics */}
        {activeTab === 'Analytics' && (
          <div className="max-w-4xl mx-auto bg-white/90 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-center">Weekly Engagement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Views" fill="#f97316" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Likes" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Shares" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* About */}
        {activeTab === 'About' && (
          <div className="max-w-2xl mx-auto px-4 text-center bg-white/90 py-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">About the Artist</h3>
            <p className="text-sm text-gray-600">
              Priya Sharma is a renowned potter based in Jaipur, India. Her work reflects traditional techniques passed down through generations blended with a modern aesthetic. With over a decade of experience, she continues to inspire young artisans across the country.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistStoryboard;

