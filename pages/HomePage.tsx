import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Truck, MessageCircle, Phone } from 'lucide-react';
import { SETTINGS, STATISTICS } from '../data/settings';
import { MENU_ITEMS } from '../data/menu';

const HomePage = () => {
  // Ensure the trending item is first, followed by bestsellers
  const popularItems = MENU_ITEMS.filter(item => item.isTrending || item.isBestseller).slice(0, 3);
  const whatsappUrl = `https://wa.me/${SETTINGS.whatsapp}?text=Hi! I'd like to place an order from OSB Hot & Chat`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1920&auto=format&fit=crop')] bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-start justify-center min-h-[500px]">
          <span className="bg-brand-yellow text-brand-dark px-3 py-1 rounded-sm font-bold text-xs uppercase tracking-wider mb-4">
            Since 2008 • Pure Veg
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4 text-white drop-shadow-lg">
            West Mambalam's<br/>
            <span className="text-brand-red">Favorite Street Food</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
            Authentic Chats, South Indian Tiffin, and Fresh Juices served hot and fresh daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/menu" className="bg-brand-red text-white px-8 py-3 rounded-lg font-bold text-center hover:bg-orange-700 transition shadow-lg flex items-center justify-center gap-2">
              View Menu <ArrowRight size={18} />
            </Link>
            <a href={SETTINGS.swiggyLink} target="_blank" rel="noreferrer" className="bg-white text-brand-dark px-8 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition shadow-lg">
              Order on Swiggy
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-brand-red text-white py-6 shadow-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Star className="mb-2 text-brand-yellow" size={24} />
              <span className="font-bold text-xl">{STATISTICS.rating} Rating</span>
              <span className="text-xs opacity-80">on Swiggy/Justdial</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="mb-2 text-brand-yellow" size={24} />
              <span className="font-bold text-xl">Fast Delivery</span>
              <span className="text-xs opacity-80">via Swiggy</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 font-bold text-brand-yellow border-2 border-brand-yellow rounded-full w-6 h-6 flex items-center justify-center text-xs">V</div>
              <span className="font-bold text-xl">100% Pure Veg</span>
              <span className="text-xs opacity-80">Guaranteed Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="mb-2 text-brand-yellow" size={24} />
              <span className="font-bold text-xl">Open Daily</span>
              <span className="text-xs opacity-80">Evening & Dinner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Crowd Favorites</h2>
              <p className="text-gray-600">Dishes our customers love the most</p>
            </div>
            <Link to="/menu" className="hidden md:flex items-center text-brand-red font-bold hover:underline">
              Full Menu <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${item.isTrending ? 'ring-2 ring-brand-red transform md:-translate-y-2' : ''}`}
              >
                <div className="h-48 overflow-hidden relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                   
                   {/* Trending Badge */}
                   {item.isTrending && (
                      <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-10 flex items-center gap-1">
                        🔥 TRENDING #1
                      </span>
                   )}

                   {/* Bestseller Badge (show only if not trending to avoid clutter, or show secondary) */}
                   {item.isBestseller && !item.isTrending && (
                     <span className="absolute top-3 left-3 bg-brand-yellow text-xs font-bold px-2 py-1 rounded shadow-sm text-brand-dark">
                       BESTSELLER
                     </span>
                   )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-brand-dark">{item.name}</h3>
                    <span className="font-bold text-brand-red">₹{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex gap-2">
                     <a href={SETTINGS.swiggyLink} target="_blank" rel="noreferrer" className={`flex-1 text-white py-2 rounded text-sm font-bold text-center transition-colors ${item.isTrending ? 'bg-red-600 hover:bg-red-700' : 'bg-brand-red hover:bg-orange-700'}`}>
                       Order Swiggy
                     </a>
                     <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-3 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">
                       <MessageCircle size={20} />
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center text-brand-red font-bold">
              View Full Menu <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Visit Us Today</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-brand-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm mt-1">{SETTINGS.address}</p>
                    <p className="text-gray-500 text-xs mt-1">Near Punjab National Bank</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-brand-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Timings</h4>
                    <p className="text-gray-600 text-sm mt-1">{SETTINGS.timings}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href={SETTINGS.mapsLink} target="_blank" rel="noreferrer" className="bg-brand-dark text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition flex items-center">
                  <MapPin size={18} className="mr-2" /> Get Directions
                </a>
                <a href={`tel:${SETTINGS.phone}`} className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:border-brand-red hover:text-brand-red transition flex items-center">
                  <Phone size={18} className="mr-2" /> Call Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[300px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.671399898236!2d80.2255!3d13.0405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI1LjgiTiA4MMKwMTMnMzEuOCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                className="absolute inset-0 w-full h-full"
                title="OSB Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;