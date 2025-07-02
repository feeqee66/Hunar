
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('tiles');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 px-6 py-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-4xl font-extrabold text-orange-700 mb-8 text-center">
          Your Dashboard
        </h2>

        {/* Skill Tracker */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skill Learning Tracker</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Learned: Madhubani Basics – 80% completed</li>
            <li>Currently learning: Warli Techniques – 40%</li>
            <li>Upcoming: Block Printing Masterclass</li>
          </ul>
        </section>

        {/* Recommendation Spiderweb */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Recommendations</h3>
          <div className="flex justify-center mb-4">
            {/*STILL NEED CONFIRMATION ON THIS FROM FISHY*/}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Spider_web.svg"
              alt="Spiderweb Skill Map"
              className="h-56 w-auto opacity-70"
            />
          </div>
          <p className="text-center text-gray-700">Recommendations based on your interests and learning history.</p>
        </section>

        {/* Filter Toggle for the map */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">Search Filters</h3>
            <div className="space-x-2">
              <button
                onClick={() => setViewMode('tiles')}
                className={`px-4 py-1 rounded-md text-sm font-medium ${viewMode === 'tiles' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 border'}`}
              >
                Tile View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-1 rounded-md text-sm font-medium ${viewMode === 'map' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 border'}`}
              >
                Map View
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            {viewMode === 'tiles' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">Kalamkari</div>
                <div className="bg-white p-4 rounded shadow">Pattachitra</div>
                <div className="bg-white p-4 rounded shadow">Terracotta</div>
              </div>
            ) : (
              <div className="flex justify-center">
                {/*Need pics*/}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/India-locator-map-blank.svg"
                  alt="Craft Map of India"
                  className="w-full max-w-xl opacity-80"
                />
              </div>
            )}
          </div>
        </section>

        {/* Wishlist */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wishlist</h3>
          <div className="bg-pink-50 p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-gray-700">Learn Block Printing</div>
            <div className="bg-white p-4 rounded shadow text-gray-700">Buy DIY Batik Kit</div>
            <div className="bg-white p-4 rounded shadow text-gray-700">Attend Puppetry Workshop</div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Dashboard;
