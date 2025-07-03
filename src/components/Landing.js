// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

{/*Follows the figma design*/}
const Landing = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-orange-50 via-white to-yellow-100">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <h1 className="text-xl font-bold text-gray-900">Hunar</h1>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/explore" className="hover:text-orange-600">Explore</Link>
          <Link to="/artisans" className="hover:text-orange-600">Artisans</Link>
          <Link to="/learn" className="hover:text-orange-600">Learn</Link>
          <Link to="/workshops" className="hover:text-orange-600">Workshops</Link>
          <Link to="/about" className="hover:text-orange-600">About</Link>
        </nav>
        <div className="space-x-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">Sign Up</button>
          <Link to="/login">
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log In</button>
          </Link>
        </div>
      </header>

      <section className="flex justify-center items-center px-6 py-20">
        <div className="max-w-4xl text-center bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover the Soul of Indian Craftsmanship
          </h2>
          <p className="text-gray-600 mb-6">
            Connect with artisans, learn ancient techniques, and explore the rich heritage of India.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
              Explore Crafts
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium">
              Join as Artisan
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
        <p className="text-gray-700">
          Hunar is dedicated to preserving and promoting the diverse artistic traditions of India. We empower artisans by
          providing a platform to showcase their work, connect with learners, and share their stories. Our mission is to foster a vibrant
          community where creativity thrives and cultural heritage is celebrated.
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 border-t mt-12">
        © 2025 Hunar. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;





