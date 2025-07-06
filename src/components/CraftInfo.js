import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IP from '../assets/ip.jpg';
import IPW from '../assets/ipw.jpg';
import bgImage from '../assets/bg.jpg';

const artisanDetails = {
  1: {
    name: 'Claytopia',
    skill: 'Pottery Master',
    location: 'Jaipur, Rajasthan',
    bio: 'Alisha has been shaping terracotta for over 20 years, blending traditional forms with contemporary flair.',
    workshop: {
      title: 'Terracotta Pottery Basics',
      timing: 'Every Sat & Sun, 11AM - 2PM',
      mode: 'Offline',
      description:
        'This hands-on workshop teaches the fundamentals of working with clay, forming techniques, and terracotta finishing.',
      images: [IP,IPW],
    },
    reviews: [
      { user: 'Meera S.', comment: 'Absolutely loved her hands-on teaching style!' },
      { user: 'Rajiv P.', comment: 'Very insightful and patient with beginners.' },
    ],
  },
};

const CraftInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = artisanDetails[id];

  if (!artist) {
    return (
      <div className="text-center p-10">
        <h2 className="text-xl font-bold text-gray-700">Artisan not found.</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-orange-500 hover:underline">Go Back</button>
      </div>
    );
  }

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
         <div className=" px-6 py-10 min-h-full"></div>
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

      {/* Main Content */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-1">{artist.name}</h2>
        <p className="text-gray-600 italic">{artist.skill}</p>
        <p className="text-sm text-gray-500 mb-6">📍 {artist.location}</p>

        {/* About */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-700 leading-relaxed">{artist.bio}</p>
        </section>

        {/* Workshop Details */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Workshop Details</h3>
          <p className="font-medium text-gray-800">{artist.workshop.title}</p>
          <p className="text-sm text-gray-500 mb-1">🕐 {artist.workshop.timing}</p>
          <p className="text-sm text-gray-500 mb-3">🎯 Mode: {artist.workshop.mode}</p>
          <p className="text-gray-700 mb-4">{artist.workshop.description}</p>
          <div className="grid grid-cols-2 gap-4">
            {artist.workshop.images.map((src, idx) => (
              <img key={idx} src={src} alt="workshop" className="w-full h-48 object-cover rounded-md" />
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          <ul className="space-y-3">
            {artist.reviews.map((review, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm text-gray-800"><strong>{review.user}:</strong> {review.comment}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">Add to Wishlist</button>
          <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition">Contact</button>
        </div>
      </motion.div>
    </div>
  );
};

export default CraftInfo;
