import React from 'react';

const GalleryPage = () => {
  // Simulating gallery images - ideally this comes from a JSON file
  const images = [
    { id: 1, url: "https://picsum.photos/600/600?random=g1", caption: "Crispy Pani Puri" },
    { id: 2, url: "https://picsum.photos/600/800?random=g2", caption: "Masala Dosa Special" },
    { id: 3, url: "https://picsum.photos/800/600?random=g3", caption: "Evening Crowd" },
    { id: 4, url: "https://picsum.photos/600/600?random=g4", caption: "Fresh Juice Counter" },
    { id: 5, url: "https://picsum.photos/600/800?random=g5", caption: "Sambar Idli" },
    { id: 6, url: "https://picsum.photos/800/600?random=g6", caption: "Shop Exterior" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Gallery</h1>
          <p className="text-gray-600">A glimpse into our food and atmosphere</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md bg-white">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;