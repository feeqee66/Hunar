
import React, { useState } from 'react';
import { FaMapMarkedAlt, FaListUl } from 'react-icons/fa';

const sample = [
  {
    id: 1,
    title: 'Madhubani Painting Basics',
    category: 'Painting',
    location: 'Delhi',
    mode: 'Offline',
    distance: 2.3,
  },
  {
    id: 2,
    title: 'Online Crochet for Beginners',
    category: 'Textile',
    location: 'Online',
    mode: 'Online',
    distance: 0,
  },
  {
    id: 3,
    title: 'Pottery Workshop',
    category: 'Pottery',
    location: 'Mumbai',
    mode: 'Offline',
    distance: 5.1,
  },
];

const Workshop = () => {
  const [viewMap, setViewMap] = useState(false);
  const [filter, setFilter] = useState({ category: '', mode: '', nearby: false });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const toggleNearby = () => setFilter({ ...filter, nearby: !filter.nearby });
  const toggleView = () => setViewMap(!viewMap);

  const filteredWorkshops = sample.filter((w) => {
    return (
      (!filter.category || w.category === filter.category) &&
      (!filter.mode || w.mode === filter.mode) &&
      (!filter.nearby || w.distance <= 5)
    );
  });

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-orange-700">Workshops</h2>
          <button onClick={toggleView} className="flex items-center gap-2 px-4 py-2 rounded-md bg-orange-200 hover:bg-orange-300">
            {viewMap ? <FaListUl /> : <FaMapMarkedAlt />} {viewMap ? 'List View' : 'Map View'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select name="category" onChange={handleChange} className="p-2 rounded border">
            <option value="">All Categories</option>
            <option value="Painting">Painting</option>
            <option value="Pottery">Pottery</option>
            <option value="Textile">Textile</option>
          </select>
          <select name="mode" onChange={handleChange} className="p-2 rounded border">
            <option value="">All Modes</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          <label className="flex items-center gap-2">
            <input type="checkbox" onChange={toggleNearby} checked={filter.nearby} /> Nearby Only
          </label>
        </div>

        {viewMap ? (
          <div className="bg-white h-64 flex items-center justify-center text-gray-500 border rounded shadow">
            [Map view placeholder]
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((w) => (
              <div key={w.id} className="p-4 bg-white rounded shadow hover:shadow-md">
                <h3 className="text-xl font-bold text-orange-800 mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600">Category: {w.category}</p>
                <p className="text-sm text-gray-600">Location: {w.location}</p>
                <p className="text-sm text-gray-600">Mode: {w.mode}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshop;
