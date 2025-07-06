import React from 'react';
import tcpot from '../assets/tcpot.jpg';
import ceramic from '../assets/ceramic.jpg';
import clay from '../assets/clay.jpg';
const RecommendationTiles = ({ startingCraft = 'Pottery' }) => {
  // Example data — adjust/extend as needed
  const craftRecommendations = {
    Pottery: [
      { title: 'Terracotta', description: 'Traditional terracotta art', image: tcpot },
      { title: 'Ceramic Art', description: 'Beautiful ceramic designs', image:ceramic},
      { title: 'Clay Modeling', description: 'Creative clay figures', image:clay }
    ],
    Weaving: [
      { title: 'Handloom', description: 'Handwoven textiles', image: '/images/handloom.jpg' },
      { title: 'Embroidery', description: 'Detailed embroidery work', image: '/images/embroidery.jpg' },
      { title: 'Macrame', description: 'Knotted macrame art', image: '/images/macrame.jpg' }
    ]
  };

  const recommendations = craftRecommendations[startingCraft] || [];

  return (
    <div className="flex overflow-x-auto space-x-4 py-2">
      {recommendations.map((item, index) => (
        <div 
          key={index}  
          className="min-w-[200px] bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="h-32 w-full object-cover rounded"
          />
          <h4 className="mt-2 font-semibold text-center">{item.title}</h4>
          <p className="text-xs text-gray-500 text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationTiles;
