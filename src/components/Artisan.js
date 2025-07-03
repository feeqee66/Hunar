import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const artisans = [
  { id: 1, name: 'Alisha Khan', skill: 'Pottery Master', image: '/assets/artisan1.jpeg' },
  { id: 2, name: 'Rohan Verma', skill: 'Weaving Virtuoso', image: '/assets/artisan2.webp' },
  { id: 3, name: 'Piya Sharma', skill: 'Painting Educator', image: '/assets/artisan3.avif' },
  { id: 4, name: 'Vikram Singh', skill: 'Woodcarving Sculptor', image: '/assets/artisan4.jpeg' },
  { id: 5, name: 'Anjali Patel', skill: 'Embroidery Specialist', image: '/assets/artisan5.jpg' },
  { id: 6, name: 'Ayan Kapoor', skill: 'Painting Storyteller', image: '/assets/artisan6.jpg' }
];

const crafts = [
  { name: 'Pottery', image: '/assets/pottery.jpg' },
  { name: 'Weaving', image: '/assets/weaving.jpg' },
  { name: 'Painting', image: '/assets/painting.jpg' },
  { name: 'Wood Carving', image: '/assets/wood.jpg' },
  { name: 'Embroidery', image: '/assets/embroidery.jpg' },
  { name: 'Jewelry Making', image: '/assets/jewelry.jpg' }
];

const Artisan = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/artisan/${id}`);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-white font-sans text-gray-800">
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

      {/* Search Section */}
      <div className="mb-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Discover Artisans</h2>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 max-w-md mx-auto shadow-sm">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none"
          />
        </div>
      </div>

      {/* Horizontal Scroll Row */}
      <div className="flex overflow-x-auto gap-6 px-2 pb-6 mb-10 max-w-6xl mx-auto">
        {artisans.slice(0, 3).map((artisan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[200px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(artisan.id)}
          >
            <img src={artisan.image} alt={artisan.name} className="h-40 w-full object-cover" />
            <div className="p-3">
              <p className="font-semibold">{artisan.name}</p>
              <p className="text-sm text-gray-500">{artisan.skill}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Artisans */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-4">Featured Artisans</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {artisans.map((artisan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(artisan.id)}
            >
              <img src={artisan.image} alt={artisan.name} className="h-32 w-full object-cover" />
              <div className="p-3">
                <p className="font-semibold text-sm">{artisan.name}</p>
                <p className="text-xs text-gray-500">{artisan.skill}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Explore by Craft */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-4">Explore by Craft</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {crafts.map((craft, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow overflow-hidden text-center"
            >
              <img src={craft.image} alt={craft.name} className="h-24 w-full object-cover" />
              <div className="p-2">
                <p className="text-sm font-medium">{craft.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 text-sm text-gray-500">
        <button className="hover:text-black">{'<'}</button>
        {[1, 2, 3, 4].map(num => (
          <button key={num} className="hover:text-black">{num}</button>
        ))}
        <button className="hover:text-black">{'>'}</button>
      </div>
    </div>
  );
};

export default Artisan;
