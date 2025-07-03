import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';

const Landing = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-orange-50 via-white to-yellow-100">
      {/*Header.... this has given me headaches */}
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
      {/* Hero Section */}
      <section className="flex justify-center items-center px-6 py-20">
        <div className="max-w-4xl text-center bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover the Soul of Indian Craftsmanship
          </h2>
          <p className="text-gray-600 mb-6">
            Connect with artisans, learn ancient techniques, and explore the rich heritage of India.
          </p>
          <div className="flex justify-center space-x-4">
            <button
  onClick={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = document.createElement('span');

    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = e.clientX - rect.left - rect.width / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - rect.height / 2 + 'px';
    ripple.className = 'absolute bg-orange-300 rounded-full opacity-50 animate-ripple z-0';
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }}
  className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium z-10"
>
  <Link to="/workshops" className="relative z-10">Explore Craft</Link>
</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium">
              Join as Artisan
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
        <p className="text-gray-700">
          HunarHub revives Indian craftsmanship by connecting artisans with learners through workshops.
        </p>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Skill-based Workshops',
              desc: 'Hands-on learning experiences across art forms.',
            },
            {
              title: 'Accessible Learning',
              desc: 'Open to all learners, with virtual options.',
            },
            {
              title: 'Social Storytelling',
              desc: 'Share artisan stories and reach new audiences.',
            },
            {
              title: 'Community Collaboration',
              desc: 'Partner with artisans, learners, NGOs.',
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg"
            >
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artisan Spotlights */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Artisan Spotlights</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[
            {
              name: 'Rohan Verma',
              title: 'Handcrafted Textiles',
              image: '/assets/artisan1.jpeg',
            },
            {
              name: 'Piya Sharma',
              title: 'Intricate Saree Embroidery',
              image: '/assets/artisan2.webp',
            },
            {
              name: 'Arun Singh',
              title: 'Clay masterpieces by molding through culture.',
              image: '/assets/artisan3.avif',
            }
          ].map((artisan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img src={artisan.image} alt={artisan.name} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800">{artisan.name}</h4>
                <p className="text-sm text-gray-600">{artisan.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stay Updated */}
      <section className="px-6 py-10 max-w-xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">Subscribe for workshops, artisan stories, and updates.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;






