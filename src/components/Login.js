import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';

const Login = () => {
  const [isArtist, setIsArtist] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${isArtist ? 'Artist' : 'User'} with`, { email, password });
    
    if (!isArtist) {
      navigate('/dashboard');
    } else {
      navigate('/artist-dashboard');
    }
  };

  return (
    <div
      className="min-h-screen w-full font-sans text-gray-800 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          {isArtist ? 'Artist Login' : 'User Login'}
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold mb-4"
        >
          Login
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-700 mb-2">Login as:</p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsArtist(false)}
              className={`px-3 py-1 rounded-md border ${!isArtist ? 'bg-orange-200 font-medium' : 'bg-white'} transition`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setIsArtist(true)}
              className={`px-3 py-1 rounded-md border ${isArtist ? 'bg-orange-200 font-medium' : 'bg-white'} transition`}
            >
              Artist
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
