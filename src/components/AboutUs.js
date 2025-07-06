import React from 'react';
import GooseImage from '../assets/hazel.jpg';
import Fishy from '../assets/fishy.jpeg';
import Celu from '../assets/celi.jpg';
import Gay from '../assets/gay.jpg';
import CraftBannerVideo from '../assets/aboutus.mp4';
import BannerBG from '../assets/bg.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Hazel Sequeira',
    role: 'Full Stack Developer',
    desc: 'Loves storytelling through code',
    img: GooseImage,
  },
  {
    name: 'Freia Quadros',
    role: 'Project Manager',
    desc: 'Passionate about visual narratives',
    img: Fishy,
  },
  {
    name: 'Celene Ciby',
    role: 'Designer & Vision Lead',
    desc: 'Driven by cultural preservation',
    img: Celu,
  },
  {
    name: 'Jaden Vaz',
    role: 'Content Lead',
    desc: 'Dedicated to sharing artisan stories',
    img: Gay,
  },
];

const AboutUs = () => {
  return (
    <div
      className="min-h-screen font-sans text-gray-800 px-6 py-10"
      style={{
        backgroundImage: `url(${BannerBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">Sign Up</button>
          <Link to="/login">
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md">Log In</button>
          </Link>
        </div>
      </motion.header>

      {/* Video Banner */}
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-xl shadow-md mb-16">
        <video
          className="w-full h-64 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={CraftBannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white">
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member, idx) => (
            <motion.div
  key={idx}
  whileHover={{ scale: 1.05 }}
  className="relative text-center bg-white/90 p-4 rounded-xl shadow-lg transition-all duration-300 w-48"
>
  <img
    src={member.img}
    alt={member.name}
    className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow"
  />
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="border border-orange-300 rounded-lg px-3 py-2 mt-2 bg-white shadow-md"
  >
    <h3 className="font-semibold text-gray-800">{member.name}</h3>
    <p className="text-sm text-orange-600">{member.role}</p>
    <p className="text-xs text-gray-500 mt-1">{member.desc}</p>
  </motion.div>
</motion.div>

          ))}
        </div>
      </div>

      {/* Why We Built This Section */}
      <div className="max-w-4xl mx-auto text-center bg-white/90 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Why We Built This</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Hunar was born from a shared passion for preserving and celebrating Indian cultural heritage.
          We envisioned a platform that not only teaches traditional crafts but also connects learners with
          the artisans who carry these traditions forward. Our goal is to foster a vibrant community where
          creativity, learning, and cultural exchange thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

