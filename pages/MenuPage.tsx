import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/menu';
import { SETTINGS } from '../data/settings';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all"); // all, under50, 50to100, over100

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

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-2">Our Menu</h1>
          <p className="text-gray-600">Authentic flavors prepared fresh daily</p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 sticky top-24 z-30 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Scroll */}
            <div className="overflow-x-auto pb-2 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0">
              <div className="flex space-x-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === cat 
                      ? 'bg-brand-dark text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Price */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full sm:w-64 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                />
              </div>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red bg-white"
              >
                <option value="all">Any Price</option>
                <option value="under50">Under ₹50</option>
                <option value="50to100">₹50 - ₹100</option>
                <option value="over100">Over ₹100</option>
              </select>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                     {item.isVeg && (
                        <span className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Veg
                        </span>
                     )}
                     {item.isBestseller && (
                        <span className="bg-brand-yellow text-brand-dark text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Bestseller
                        </span>
                     )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                    <span className="font-bold text-brand-red">₹{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-4 min-h-[2.5em]">{item.description}</p>
                  
                  <div className="flex gap-2">
                    <a 
                      href={SETTINGS.swiggyLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 bg-white border border-brand-red text-brand-red hover:bg-brand-red hover:text-white py-2 rounded-lg font-bold text-sm text-center transition-colors"
                    >
                      Order Swiggy
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <AlertCircle className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-600">No items found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
            <button 
              onClick={() => {setSearchQuery(""); setPriceFilter("all"); setSelectedCategory("All");}}
              className="mt-4 text-brand-red font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-12 p-6 bg-brand-cream rounded-xl text-center border border-orange-100">
          <h3 className="font-bold text-xl text-brand-dark mb-2">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-4">Call us directly for special bulk orders or specific inquiries.</p>
          <a href={`tel:${SETTINGS.phone}`} className="inline-block bg-brand-dark text-white px-6 py-2 rounded-lg font-bold hover:bg-black transition">
            Call Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default MenuPage;