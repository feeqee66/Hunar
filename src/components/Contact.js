import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg.jpg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setTimeout(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center font-sans text-gray-800"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen w-full ">
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

        {/* Form Section */}
        <section className="flex flex-col items-center justify-start pt-16 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 w-full max-w-2xl rounded-xl shadow-lg"
          >
            <h3 className="text-4xl font-bold mb-4 text-center text-gray-900">Contact Us</h3>
            <p className="text-md mb-6 text-center text-gray-600">
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-green-600 font-semibold text-center mb-4"
              >
                Thank you for contacting us!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <div className="text-red-600 text-center">{error}</div>}
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium w-full"
                >
                  Send Message
                </motion.button>
              </form>
            )}

            <div className="text-center mt-6">
              <p className="mb-2 text-lg text-gray-700">or</p>
              <a
                href="mailto:contact@hunar.com"
                className="inline-block px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
