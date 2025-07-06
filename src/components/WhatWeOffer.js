import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import { FaBookOpen, FaLaptop, FaPeopleCarry, FaHandsHelping } from 'react-icons/fa';
import Card from './Card';

const WhatWeOffer = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    { title: "Skill-based Workshops", description: "Hands-on learning experiences.", icon: <FaBookOpen /> },
    { title: "Accessible Learning", description: "Virtual options for all learners.", icon: <FaLaptop /> },
    { title: "Social Storytelling", description: "Reach new audiences.", icon: <FaHandsHelping /> },
    { title: "Community Collaboration", description: "Partner with NGOs and learners.", icon: <FaPeopleCarry /> },
    { title: "Cultural Revival", description: "Celebrate India's heritage.", icon: <FaBookOpen /> },
    { title: "Creative Expression", description: "Art as a voice for change.", icon: <FaHandsHelping /> },
  ];

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto mt-10 relative">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Offer</h3>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-100 hover:bg-orange-200 shadow-lg rounded-full p-3 z-10 hidden md:block transition"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-100 hover:bg-orange-200 shadow-lg rounded-full p-3 z-10 hidden md:block transition"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Card Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth px-2 py-2 border rounded-lg bg-white/50"
      >
        {cards.map((card, index) => (
          <div key={index} className="shrink-0 min-w-[220px] bg-gradient-to-br from-orange-100 to-yellow-50 border border-orange-200 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <Card title={card.title} description={card.description} icon={card.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
