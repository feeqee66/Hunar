import React, { useState } from 'react';
import potteryImg from '../assets/pottery.jpg';
import textileImg from '../assets/textile.webp';
import woodImg from '../assets/wood.jpeg';
import jewelryImg from '../assets/jewelry.jpg';
import paintingImg from '../assets/madhubani.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import indiaMapVideo from '../assets/indiaMapVideo.mp4'; 
import bgImage from '../assets/bg.jpg'; 

const workshops = [
  {
    id: 1,
    title: 'Pottery Workshop',
    location: 'Jaipur, Rajasthan',
    image: potteryImg,
    category: 'Pottery',
    type: 'Offline',
  },
  {
    id: 2,
    title: 'Textile Weaving Studio',
    location: 'Kanchipuram, Tamil Nadu',
    image: textileImg,
    category: 'Textile',
    type: 'Offline',
  },
  {
    id: 3,
    title: 'Wood Carving Class',
    location: 'Mysore, Karnataka',
    image: woodImg,
    category: 'Wood Carving',
    type: 'Offline',
  },
  {
    id: 4,
    title: 'Jewelry Making Workshop',
    location: 'Kolkata, West Bengal',
    image: jewelryImg,
    category: 'Jewelry',
    type: 'Online',
  },
  {
    id: 5,
    title: 'Traditional Painting Class',
    location: 'Madhubani, Bihar',
    image: paintingImg,
    category: 'Painting',
    type: 'Offline',
  },
];

const Explore = () => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const navigate = useNavigate();

  const filteredWorkshops = workshops.filter((w) => {
    const matchesSearch =
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.location.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'All' || w.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div
  className="min-h-screen font-sans text-gray-800 relative overflow-hidden"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
     <div className=" px-6 py-10 min-h-full">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">Sign Up</button>
            <Link to="/login">
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log In</button>
            </Link>
          </div>
        </motion.header>

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2">Explore Crafts</h2>
          <p className="text-gray-600">Discover artisans and workshops across India</p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search for creators or locations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border shadow-sm focus:outline-none"
          />
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-1 rounded-md ${typeFilter === 'All' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setTypeFilter('All')}
            >
              All
            </button>
            <button
              className={`px-4 py-1 rounded-md ${typeFilter === 'Online' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setTypeFilter('Online')}
            >
              Online
            </button>
            <button
              className={`px-4 py-1 rounded-md ${typeFilter === 'Offline' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setTypeFilter('Offline')}
            >
              Offline
            </button>
          </div>
        </div>

        {/* India Map */}
        <div className="w-full max-w-4xl mx-auto mb-10">
          <video
            src={indiaMapVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
        </div>

        {/* Artisans Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Artisans and Workshops</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredWorkshops.map((ws) => (
              <div
                key={ws.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-200 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/workshop/${ws.id}`)}
              >
                <img src={ws.image} alt={ws.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{ws.title}</h4>
                  <p className="text-sm text-gray-600">{ws.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
