import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = defaultIcon;

const ArtisanMap = () => {
  // Example artisan data — replace with your actual data
  const artisans = [
    { name: "Rajesh", lat: 28.6139, lon: 77.2090, skill: "Block Printing" },  // Delhi
    { name: "Meena", lat: 19.0760, lon: 72.8777, skill: "Pottery" },         // Mumbai
    { name: "Amit", lat: 13.0827, lon: 80.2707, skill: "Terracotta" },       // Chennai
  ];

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={[22.9734, 78.6569]} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {artisans.map((artisan, index) => (
          <Marker key={index} position={[artisan.lat, artisan.lon]}>
            <Popup>
              <strong>{artisan.name}</strong><br/>
              Skill: {artisan.skill}<br/>
              <button onClick={() => alert(`Viewing ${artisan.name}`)}>View Profile</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ArtisanMap;
