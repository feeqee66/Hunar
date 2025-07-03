import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex justify-between items-center px-10 py-4 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-10">
      <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        Hunar <FaMusic className="text-pink-500 animate-bounce" />
      </h1>
      <nav className="space-x-6 hidden md:flex">
        <Link to="/about" className={`${isActive('/about') ? 'font-bold' : ''} hover:text-orange-600`}>
          About Us
        </Link>
        <Link to="/artisan" className={`${isActive('/artisan') ? 'font-bold' : ''} hover:text-orange-600`}>
          Explore Artisans
        </Link>
        <Link to="/contact" className={`${isActive('/contact') ? 'font-bold' : ''} hover:text-orange-600`}>
          Contact Us
        </Link>
      </nav>
      <div className="space-x-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">Sign Up</button>
        <Link to="/login">
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
