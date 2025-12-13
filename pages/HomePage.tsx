import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Truck, MessageCircle, Phone, Quote, ChevronRight } from 'lucide-react';
import { SETTINGS, STATISTICS } from '../data/settings';
import { MENU_ITEMS } from '../data/menu';
import { REVIEWS, RATING_DISTRIBUTION } from '../data/reviews';

// Inline Google Logo to ensure it loads correctly
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
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
      
      <div className="relative h-40 w-full flex items-end gap-1 pb-6 overflow-hidden">
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
              onClick={() => setHoverIndex(hoverIndex === i ? null : i)} // Mobile tap support
            >
              {/* Tooltip */}
              <div 
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-200 pointer-events-none ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className="bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded shadow-xl whitespace-nowrap z-20 font-medium">
                  {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}: {height}%
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
              
              {/* Bar */}
              <div 
                className={`w-full min-w-[8px] rounded-t-sm transition-all duration-300 relative ${
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
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1920&auto=format&fit=crop')] bg-center bg-cover scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent md:bg-gradient-to-r md:from-black/80 md:to-transparent"></div>

        <div className="relative container mx-auto px-6 py-24 md:py-40 flex flex-col items-start justify-center min-h-[550px]">
          <span className="bg-brand-yellow text-brand-dark px-3 py-1.5 rounded font-bold text-xs uppercase tracking-wider mb-6 shadow-lg transform -rotate-1">
            Since 2008 • Pure Veg
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-white drop-shadow-2xl">
            West Mambalam's<br/>
            <span className="text-brand-red bg-white/5 px-2 rounded-lg decoration-4 underline-offset-4">Favorite Street Food</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
            Authentic Chats, South Indian Tiffin, and Fresh Juices served hot and fresh daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/menu" className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
              View Menu <ArrowRight size={20} />
            </Link>
            <a href={SETTINGS.swiggyLink} target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-white/20 transition-all shadow-xl flex items-center justify-center">
              Order on Swiggy
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats - Enhanced for Mobile */}
      <section className="bg-brand-red text-white py-10 shadow-lg relative z-10 -mt-2 rounded-t-3xl md:rounded-none mx-2 md:mx-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-2">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                 <Star className="text-brand-yellow" size={24} fill="currentColor" />
              </div>
              <span className="font-bold text-xl md:text-2xl">{STATISTICS.rating} Rating</span>
              <span className="text-xs opacity-80 mt-1">on Google</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                 <Truck className="text-brand-yellow" size={24} />
              </div>
              <span className="font-bold text-xl md:text-2xl">Fast Delivery</span>
              <span className="text-xs opacity-80 mt-1">via Swiggy</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                 <div className="font-bold text-brand-yellow border-2 border-brand-yellow rounded-full w-6 h-6 flex items-center justify-center text-xs">V</div>
              </div>
              <span className="font-bold text-xl md:text-2xl">100% Pure Veg</span>
              <span className="text-xs opacity-80 mt-1">Guaranteed Quality</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                 <Clock className="text-brand-yellow" size={24} />
              </div>
              <span className="font-bold text-xl md:text-2xl">Open Daily</span>
              <span className="text-xs opacity-80 mt-1">Evening & Dinner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10 px-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-3">Crowd Favorites</h2>
              <p className="text-gray-600 text-lg">Dishes our customers love the most</p>
            </div>
            <Link to="/menu" className="hidden md:flex items-center text-brand-red font-bold hover:underline bg-white px-4 py-2 rounded-full shadow-sm">
              Full Menu <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${item.isTrending ? 'ring-2 ring-brand-red transform md:-translate-y-2' : ''}`}
              >
                <div className="h-56 overflow-hidden relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                   {/* Trending Badge */}
                   {item.isTrending && (
                      <span className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10">
                        🔥 Trending
                      </span>
                   )}

                   {/* Bestseller Badge */}
                   {item.isBestseller && !item.isTrending && (
                     <span className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                       Bestseller
                     </span>
                   )}
                   
                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <h3 className="font-bold text-xl text-white drop-shadow-md">{item.name}</h3>
                      <span className="font-bold text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">₹{item.price}</span>
                   </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 min-h-[2.5em]">{item.description}</p>
                  <div className="flex gap-3">
                     <a href={SETTINGS.swiggyLink} target="_blank" rel="noreferrer" className={`flex-1 text-white py-3 rounded-xl text-sm font-bold text-center transition-all shadow-md hover:shadow-lg ${item.isTrending ? 'bg-gradient-to-r from-red-600 to-red-500 hover:to-red-700' : 'bg-brand-red hover:bg-orange-700'}`}>
                       Order on Swiggy
                     </a>
                     <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-4 py-3 bg-green-50 text-green-600 border border-green-200 rounded-xl hover:bg-green-100 transition-colors">
                       <MessageCircle size={20} />
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center justify-center w-full bg-white text-brand-red font-bold py-4 rounded-xl shadow-md border border-gray-100">
              View Full Menu <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-3">Customer Love</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="font-bold text-brand-dark">{STATISTICS.rating}</span>
              <div className="flex text-brand-yellow">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" className="opacity-50" />
              </div>
              <span>from 3,000+ happy customers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Review Summary Card */}
            <div className="lg:col-span-4 h-full">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow opacity-10 rounded-bl-full -mr-8 -mt-8"></div>
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                   <div>
                     <h3 className="text-xl font-bold text-gray-800">Google Rating</h3>
                     <p className="text-xs text-gray-400">Verified Reviews</p>
                   </div>
                   <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                     <GoogleLogo />
                   </div>
                </div>
                
                <div className="flex items-end gap-3 mb-8">
                  <div className="text-6xl font-display font-bold text-brand-dark leading-none">{STATISTICS.rating}</div>
                  <div className="flex flex-col mb-1">
                     <div className="flex text-brand-yellow mb-1">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} size={18} fill="currentColor" className={star > 4 ? "text-gray-300" : "text-brand-yellow"} />
                        ))}
                     </div>
                     <span className="text-xs text-gray-500 font-medium">3,477 total reviews</span>
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-4 mb-8">
                  {RATING_DISTRIBUTION.map((dist) => (
                    <div key={dist.stars} className="flex items-center gap-3 text-sm group cursor-default">
                      <span className="font-bold text-gray-600 w-3 flex-shrink-0">{dist.stars}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-yellow rounded-full transition-all duration-1000 group-hover:bg-brand-red" 
                          style={{ width: `${dist.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-xs w-8 text-right flex-shrink-0">{dist.percentage}%</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.google.com/search?q=OSB+HOT+AND+CHAT+Reviews" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block text-center border border-gray-200 text-brand-dark py-3.5 rounded-xl font-bold hover:bg-gray-50 transition mb-auto"
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
                  <div key={review.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300 hover:bg-white">
                    <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 font-bold flex items-center justify-center text-sm border border-blue-200">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                             <p className="font-bold text-sm text-brand-dark">{review.author}</p>
                             <div className="flex text-brand-yellow text-xs mt-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={10} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-brand-yellow" : "text-gray-300"} />
                                ))}
                             </div>
                          </div>
                       </div>
                       <span className="text-xs text-gray-400 flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-gray-100">
                          <GoogleLogo />
                          {review.date}
                       </span>
                    </div>
                    <div className="relative">
                      <Quote size={20} className="absolute -top-1 -left-1 text-gray-200 transform -scale-x-100" />
                      <p className="text-gray-700 text-sm leading-relaxed mb-4 pl-6 relative z-10 italic">{review.text}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-2">
                       {review.source === 'Swiggy' ? (
                          <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider border border-orange-100">
                            <Truck size={10} /> Swiggy Order
                          </span>
                       ) : (
                          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider border border-blue-100">
                             <CheckCircleIcon size={10} /> Verified
                          </span>
                       )}
                       <div className="flex items-center text-gray-400 hover:text-brand-red cursor-pointer transition">
                          <span className="text-[10px] font-medium">Was this helpful?</span>
                       </div>
                    </div>
                  </div>
                ))}
               </div>
               
               <div className="text-center mt-10">
                <a href="https://www.google.com/search?q=OSB+HOT+AND+CHAT+Reviews" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-red font-bold hover:underline bg-red-50 px-6 py-3 rounded-full transition-colors">
                  Read all 3,477+ reviews on Google <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-20 bg-brand-cream pb-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <span className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">Visit Us Today</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                     <MapPin className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Address</h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">{SETTINGS.address}</p>
                    <p className="text-brand-red text-xs font-bold mt-2 bg-brand-red/10 inline-block px-2 py-1 rounded">Near Punjab National Bank</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                     <Clock className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Timings</h4>
                    <p className="text-gray-600 mt-1">{SETTINGS.timings}</p>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                       <span className="text-xs text-green-600 font-bold">Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={SETTINGS.mapsLink} target="_blank" rel="noreferrer" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition flex items-center justify-center shadow-lg">
                  <MapPin size={20} className="mr-2" /> Get Directions
                </a>
                <a href={`tel:${SETTINGS.phone}`} className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-brand-red hover:text-brand-red transition flex items-center justify-center">
                  <Phone size={20} className="mr-2" /> Call Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[350px] relative bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.671399898236!2d80.2255!3d13.0405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI1LjgiTiA4MMKwMTMnMzEuOCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                title="OSB Location"
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold pointer-events-none">
                 Lake View Road, West Mambalam
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Icon
const CheckCircleIcon = ({size}: {size: number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default HomePage;