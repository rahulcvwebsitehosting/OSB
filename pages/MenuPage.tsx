import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Filter, AlertCircle, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/menu';
import { SETTINGS } from '../data/settings';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all"); // all, under50, 50to100, over100
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category Filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) return false;
      
      // Search Filter
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      // Price Filter
      if (priceFilter === "under50" && item.price >= 50) return false;
      if (priceFilter === "50to100" && (item.price < 50 || item.price > 100)) return false;
      if (priceFilter === "over100" && item.price <= 100) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, priceFilter]);

  // Center active category on selection
  useEffect(() => {
    // Basic scrolling logic if needed, usually css snap is smoother
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24 md:pb-12">
      {/* Header Banner */}
      <div className="bg-brand-dark text-white py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
           <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">Our Menu</h1>
           <p className="text-gray-300 text-lg max-w-xl mx-auto">From spicy Pani Puris to rich Gravies, everything is pure veg & prepared fresh.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-6 relative z-20">
        
        {/* Sticky Search & Filter Bar */}
        <div className="sticky top-20 z-30 space-y-4">
          
          {/* Main Filter Bar */}
          <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Price Filter */}
                <div className="flex-shrink-0 relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                     <Filter size={16} />
                   </div>
                   <select
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value)}
                      className="pl-10 pr-10 py-3 border border-gray-200 rounded-xl w-full md:w-48 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 appearance-none bg-gray-50 focus:bg-white cursor-pointer"
                   >
                    <option value="all">Price: Any</option>
                    <option value="under50">Under ₹50</option>
                    <option value="50to100">₹50 - ₹100</option>
                    <option value="over100">Over ₹100</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</div>
                </div>
             </div>
          </div>

          {/* Categories Scroll - Separate sticky for cleaner mobile ux */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <div className="flex space-x-3 w-max" ref={categoryScrollRef}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-sm border ${
                    selectedCategory === cat 
                    ? 'bg-brand-red text-white border-brand-red transform scale-105 shadow-md' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="my-6 flex justify-between items-center text-sm text-gray-500 font-medium px-1">
           <p>Showing {filteredItems.length} items</p>
           {selectedCategory !== "All" && (
             <button onClick={() => setSelectedCategory("All")} className="text-brand-red hover:underline">
               View All Categories
             </button>
           )}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full">
                
                {/* Image Section */}
                <div className="h-52 relative overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                     {item.isVeg && (
                        <span className="bg-white/90 backdrop-blur-sm text-green-700 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider border border-green-200 shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span> Veg
                        </span>
                     )}
                  </div>
                  
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                     {item.isBestseller && (
                        <span className="bg-brand-yellow text-brand-dark text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider shadow-sm">
                          Bestseller
                        </span>
                     )}
                     {item.isSpicy && (
                        <span className="bg-red-100 text-red-700 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider border border-red-200 shadow-sm">
                          Spicy
                        </span>
                     )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <span className="font-bold text-lg text-brand-dark bg-gray-50 px-2 py-1 rounded-lg">₹{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-2">{item.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex gap-3">
                    <a 
                      href={SETTINGS.swiggyLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 bg-brand-cream text-brand-red border border-brand-red/20 hover:bg-brand-red hover:text-white py-2.5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                    >
                      <span>Swiggy</span> <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
               <AlertCircle className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-500 mb-6 max-w-xs mx-auto">We couldn't find any dishes matching your current filters.</p>
            <button 
              onClick={() => {setSearchQuery(""); setPriceFilter("all"); setSelectedCategory("All");}}
              className="px-6 py-2 bg-brand-dark text-white rounded-lg font-bold hover:bg-black transition shadow-lg"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-16 mb-8 p-8 bg-brand-cream rounded-2xl text-center border border-orange-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-yellow opacity-20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="font-bold text-2xl text-brand-dark mb-3">Custom Orders?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Looking for a specific item not on the menu or planning a bulk order for a party? Give us a call!</p>
            <a href={`tel:${SETTINGS.phone}`} className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition shadow-lg">
              <ShoppingBag size={18} /> Call to Order
            </a>
          </div>
        </div>

      </div>
      
      {/* Hide Scrollbar Style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MenuPage;