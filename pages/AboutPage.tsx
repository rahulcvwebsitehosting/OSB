import React from 'react';
import { Leaf, Award, Users } from 'lucide-react';
import { SETTINGS } from '../data/settings';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-red text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Story</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Serving West Mambalam with passion, purity, and authentic flavors.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="lead text-xl md:text-2xl font-light text-center mb-12 text-gray-600">
            Welcome to <strong className="text-brand-dark">{SETTINGS.name}</strong>, a culinary landmark in Ramakrishnapuram, West Mambalam.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://picsum.photos/600/400?random=about1" 
                alt="Cooking fresh food" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Authentic Street Food</h2>
              <p className="mb-4">
                We started with a simple mission: to provide high-quality, hygienic, and delicious pure-vegetarian street food to our community. From crisp Pani Puris to comforting Sambar Idlis, every dish is prepared with fresh ingredients daily.
              </p>
              <p>
                Our location on Lake View Road has become a favorite evening spot for families, students, and food lovers across Chennai who crave authentic taste without compromising on quality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="bg-brand-cream p-8 rounded-xl text-center border border-orange-100">
              <Leaf className="mx-auto text-brand-green mb-4 text-green-600" size={40} />
              <h3 className="font-bold text-xl mb-2">100% Pure Veg</h3>
              <p className="text-sm">Strict vegetarian kitchen ensuring purity in every bite.</p>
            </div>
            <div className="bg-brand-cream p-8 rounded-xl text-center border border-orange-100">
              <Award className="mx-auto text-brand-yellow mb-4 text-yellow-600" size={40} />
              <h3 className="font-bold text-xl mb-2">Quality First</h3>
              <p className="text-sm">Fresh oil, fresh vegetables, and no compromise on hygiene.</p>
            </div>
            <div className="bg-brand-cream p-8 rounded-xl text-center border border-orange-100">
              <Users className="mx-auto text-brand-red mb-4" size={40} />
              <h3 className="font-bold text-xl mb-2">Community Love</h3>
              <p className="text-sm">Trusted by thousands of happy customers in West Mambalam.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
             <h2 className="text-2xl font-bold text-brand-dark mb-4 text-center">Join Us Today</h2>
             <p className="text-center mb-8">
               Whether you are craving a spicy chaat evening or a wholesome tiffin dinner, we are here to serve you.
             </p>
             <div className="flex justify-center gap-4">
               <a href={SETTINGS.mapsLink} target="_blank" rel="noreferrer" className="bg-brand-dark text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition">
                 Visit Us
               </a>
               <a href={SETTINGS.swiggyLink} target="_blank" rel="noreferrer" className="bg-brand-red text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                 Order Online
               </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;