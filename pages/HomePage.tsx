import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Truck, MessageCircle, Phone, Quote } from 'lucide-react';
import { SETTINGS, STATISTICS } from '../data/settings';
import { MENU_ITEMS } from '../data/menu';
import { REVIEWS, RATING_DISTRIBUTION } from '../data/reviews';

// Inline Google Logo to ensure it loads correctly
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const PopularTimesGraph = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Simulated data representing busyness by hour (0-23)
  // Peaks at lunch (12-2) and Dinner (6-9)
  const hourlyTraffic = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 25, 45, 80, 70, 40, 35, 45, 65, 85, 95, 80, 50, 20, 0
  ];
  
  const currentHour = new Date().getHours();
  // Filter only visible hours (9 AM to 10 PM) for the graph
  const startHour = 9;
  const endHour = 22;
  const visibleHours = hourlyTraffic.slice(startHour, endHour + 1);

  return (
    <div className="mt-8 pt-8 border-t border-gray-100">
      <div className="flex justify-between items-baseline mb-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Clock size={18} className="text-brand-red" /> 
          Popular Times
        </h3>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Saturdays</span>
      </div>
      
      <div className="relative h-40 w-full flex items-end gap-1.5 pb-6">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 z-0">
          <div className="w-full border-t border-gray-900"></div>
          <div className="w-full border-t border-gray-900"></div>
          <div className="w-full border-t border-gray-900"></div>
          <div className="w-full border-t border-gray-900"></div>
        </div>

        {visibleHours.map((height, i) => {
          const hour = startHour + i;
          const isCurrentTime = hour === currentHour;
          const isHovered = hoverIndex === i;
          
          return (
            <div 
              key={hour} 
              className="flex-1 flex flex-col justify-end h-full relative group z-10"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Tooltip */}
              <div 
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-200 pointer-events-none ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className="bg-gray-800 text-white text-[10px] py-1.5 px-3 rounded shadow-xl whitespace-nowrap z-20 font-medium">
                  {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}: {height}% Busy
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
              
              {/* Bar */}
              <div 
                className={`w-full rounded-t-sm transition-all duration-300 relative ${
                  isCurrentTime ? 'bg-brand-red' : 'bg-blue-400'
                } ${isHovered ? 'opacity-100 scale-y-110 origin-bottom' : 'opacity-60'}`}
                style={{ height: `${height}%` }}
              ></div>
              
              {/* Hour Label */}
              {(hour === 9 || hour === 12 || hour === 15 || hour === 18 || hour === 21) && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] font-bold text-gray-400">
                  {hour > 12 ? `${hour - 12}p` : hour === 12 ? '12p' : `${hour}a`}
                </span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="border-t border-gray-100 pt-4 mt-2">
         {hourlyTraffic[currentHour] > 60 ? (
           <div className="flex items-center justify-center gap-2 text-brand-red font-bold text-sm animate-pulse">
             <div className="w-2 h-2 rounded-full bg-brand-red"></div>
             Live: Busier than usual
           </div>
         ) : (
           <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             Live: Usually not too busy
           </div>
         )}
         <p className="text-center text-xs text-gray-400 mt-1">Plan your visit to avoid the rush</p>
      </div>
    </div>
  );
};

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
              <span className="text-xs opacity-80">on Google</span>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Customer Love</h2>
            <p className="text-gray-600">Rated {STATISTICS.rating} stars by over 3,000+ happy customers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Review Summary Card */}
            <div className="lg:col-span-4 h-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-xl font-bold text-gray-800">Reviews Summary</h3>
                   <GoogleLogo />
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-6xl font-display font-bold text-brand-dark">{STATISTICS.rating}</div>
                  <div className="flex flex-col">
                     <div className="flex text-brand-yellow mb-1">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} size={20} fill="currentColor" className="text-brand-yellow" />
                        ))}
                     </div>
                     <span className="text-sm text-gray-500">3,477 reviews</span>
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-3 mb-8">
                  {RATING_DISTRIBUTION.map((dist) => (
                    <div key={dist.stars} className="flex items-center gap-3 text-sm group cursor-default">
                      <span className="font-bold text-gray-600 w-3">{dist.stars}</span>
                      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-yellow rounded-full transition-all duration-1000 group-hover:bg-brand-red" 
                          style={{ width: `${dist.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-xs w-8 text-right">{dist.percentage}%</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.google.com/search?sca_esv=147d6c4ab23ffdc0&sxsrf=AE3TifNCDcvLtliJ2b4xr1NatD7JEwxeDg:1765613133693&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_2jsmzdIizjO30QYq6cJMRqzJ5RaXhyyH08s5q_X32xpkrr3Tlrrp4hMFmUOTtg2GxtU_nkxoJUBoif7yiydJyuNW4clfHKWx_j9HGS0k_HUkvt5w%3D%3D&q=OSB+HOT+AND+CHAT+Reviews&sa=X&ved=2ahUKEwjV5JO9jbqRAxXlEzQIHYQ8Cl8Q0bkNegQIMxAE&biw=1536&bih=730&dpr=1.25#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block text-center border border-gray-200 text-brand-dark py-3 rounded-lg font-bold hover:bg-gray-50 transition mb-auto"
                >
                  Write a review
                </a>

                {/* Popular Times Graph */}
                <PopularTimesGraph />
              </div>
            </div>

            {/* Right Column: Review Grid */}
            <div className="lg:col-span-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition duration-300">
                    <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                             <p className="font-bold text-sm text-brand-dark">{review.author}</p>
                             <div className="flex text-brand-yellow text-xs">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-brand-yellow" : "text-gray-300"} />
                                ))}
                             </div>
                          </div>
                       </div>
                       <span className="text-xs text-gray-400 flex items-center gap-1">
                          <GoogleLogo />
                          {review.date}
                       </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                       {review.source === 'Swiggy' ? (
                          <span className="inline-block bg-orange-100 text-orange-800 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                            Swiggy Order
                          </span>
                       ) : (
                          <span className="inline-block bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                             Verified Review
                          </span>
                       )}
                       <div className="flex items-center text-gray-400 hover:text-red-500 cursor-pointer transition">
                          <Quote size={14} className="mr-1" />
                          <span className="text-xs">Helpful</span>
                       </div>
                    </div>
                  </div>
                ))}
               </div>
               
               <div className="text-center mt-8">
                <a href="https://www.google.com/search?sca_esv=147d6c4ab23ffdc0&sxsrf=AE3TifNaahJcjjVxrU4IzTCW42mx2xnvfA:1765612525649&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_2jsmzdIizjO30QYq6cJMRqzJ5RaXhyyH08s5q_X32xpkrr3Tlrrp4hMFmUOTtg2GxtU_nkxoJUBoif7yiydJyuNW4clfHKWx_j9HGS0k_HUkvt5w%3D%3D&q=OSB+HOT+AND+CHAT+Reviews&sa=X&ved=2ahUKEwjl2pubi7qRAxVhFTQIHYffKLEQ0bkNegQINBAE&biw=1536&bih=730&dpr=1.25" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-red font-bold hover:underline">
                  Read all 3,477+ reviews on Google <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
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