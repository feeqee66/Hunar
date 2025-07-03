// src/components/Dashboard.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaList, FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 px-6 py-10 font-sans">
       {/*Header*/}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-10 py-4 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-10"
      >
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          Hunar 
        </h1>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Craft Journey</h2>

        {/* Skill Tracker */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Skill Learning Tracker</h3>
          {[
            { skill: 'Pottery Basics', progress: 75 },
            { skill: 'Textile Weaving', progress: 50 },
            { skill: 'Wood Carving', progress: 20 },
          ].map(({ skill, progress }, index) => (
            <div key={index} className="mb-3">
              <div className="text-sm text-gray-600 mb-1">{skill}</div>
              <div className="bg-gray-200 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations Tabs */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recommendations</h3>
          <div className="flex space-x-4 border-b mb-4">
            <button className="px-4 py-2 border-b-2 border-orange-500 font-medium">Spoken Word</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">Tie Sketch</button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-4 py-2 rounded-md shadow-sm"
          />
        </div>

        {/* Wishlist */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Wishlist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Terracotta Pottery', image: '/assets/terracotta.jpg' },
              { title: 'Silk Weaving', image: '/assets/silk.jpg' },
              { title: 'Rosewood Carving', image: '/assets/rosewood.jpg' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <p className="font-medium text-gray-800">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nearby Workshops */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Nearby Workshops</h3>
          <div className="grid sm:grid-cols-4 gap-4 mb-4">
            <input type="text" placeholder="Category" className="border px-4 py-2 rounded-md" />
            <input type="text" placeholder="Location" className="border px-4 py-2 rounded-md" />
            <input type="text" placeholder="Online/Offline" className="border px-4 py-2 rounded-md" />
            <input type="text" placeholder="Type" className="border px-4 py-2 rounded-md" />
          </div>
          <div className="flex justify-end items-center space-x-2 mb-4">
            <button className="flex items-center px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"><FaList className="mr-1" /> List View</button>
            <button className="flex items-center px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"><FaMapMarkerAlt className="mr-1" /> Map View</button>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Clay Creations Studio</li>
            <li>Threads of Tradition</li>
            <li>Carving Craftsmanship</li>
          </ul>
        </div>

        {/* Saved Artisans */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Saved Artisan Storyboard</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Bai Patel', image: '/assets/artisan1.jpg' },
              { name: 'Piya Sharma', image: '/assets/artisan2.jpg' },
              { name: 'Ayuk Singh', image: '/assets/artisan3.jpg' },
            ].map((artisan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img src={artisan.image} alt={artisan.name} className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <p className="font-medium text-gray-800">Meet {artisan.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
