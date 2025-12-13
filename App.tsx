import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ShoppingBag, MessageCircle, Linkedin, Facebook, Home } from 'lucide-react';
import { SETTINGS } from './data/settings';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import LocationPage from './pages/LocationPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Sticky Mobile Navigation Bar
const MobileStickyBar = () => {
  const whatsappUrl = `https://wa.me/${SETTINGS.whatsapp}?text=Hi! I'd like to place an order from OSB Hot & Chat`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-end h-16 px-4 pb-2 max-w-md mx-auto">
        {/* Home */}
        <Link to="/" className="flex flex-col items-center justify-end h-full text-gray-400 hover:text-brand-red transition-colors w-12 pb-1">
          <Home size={20} strokeWidth={2} />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </Link>

        {/* Map */}
        <a href={SETTINGS.mapsLink} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-end h-full text-gray-400 hover:text-brand-red transition-colors w-12 pb-1">
          <MapPin size={20} strokeWidth={2} />
          <span className="text-[10px] mt-1 font-medium">Map</span>
        </a>

        {/* Prominent Menu Button */}
        <Link to="/menu" className="flex flex-col items-center justify-end h-full relative -top-6 w-14">
          <div className="bg-brand-red text-white p-3.5 rounded-full shadow-xl border-4 border-brand-cream hover:scale-105 transition-transform flex items-center justify-center">
            <ShoppingBag size={22} fill="currentColor" className="text-white" />
          </div>
          <span className="text-xs font-bold text-brand-red mt-1">Menu</span>
        </Link>

        {/* WhatsApp Order */}
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-end h-full text-green-600 hover:text-green-700 transition-colors w-12 pb-1">
          <div className="relative">
             <MessageCircle size={20} strokeWidth={2} />
             <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
          </div>
          <span className="text-[10px] mt-1 font-bold">Order</span>
        </a>

        {/* Call */}
        <a href={`tel:${SETTINGS.phone}`} className="flex flex-col items-center justify-end h-full text-gray-400 hover:text-brand-red transition-colors w-12 pb-1">
          <Phone size={20} strokeWidth={2} />
          <span className="text-[10px] mt-1 font-medium">Call</span>
        </a>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-display font-bold text-brand-red tracking-tight">OSB</span>
            <span className="text-xs font-semibold text-brand-dark tracking-wider -mt-1">HOT & CHAT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  location.pathname === link.path ? 'text-brand-red font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={SETTINGS.swiggyLink}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-red text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition-colors shadow-sm"
            >
              Order on Swiggy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-brand-red' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={SETTINGS.swiggyLink}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-red text-white text-center py-3 rounded-lg font-bold shadow-sm"
            >
              Order on Swiggy
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-brand-dark text-white pt-12 pb-24 md:pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-display font-bold text-brand-yellow mb-4">OSB Hot & Chat</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            West Mambalam's favorite destination for authentic pure-veg chats, South Indian tiffin, and fast food.
          </p>
          <div className="flex space-x-4">
            <a href={SETTINGS.facebookLink} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-brand-yellow">
              <Facebook size={24} />
            </a>
            <a href={SETTINGS.linkedinLink} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-brand-yellow">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/menu" className="hover:text-brand-yellow">Menu</Link></li>
            <li><Link to="/location" className="hover:text-brand-yellow">Location</Link></li>
            <li><Link to="/about" className="hover:text-brand-yellow">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <p className="text-gray-300 text-sm mb-2">{SETTINGS.address}</p>
          <p className="text-gray-300 text-sm mb-2">Phone: {SETTINGS.phone}</p>
          <p className="text-gray-300 text-sm mb-2">Open: {SETTINGS.timings}</p>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} OSB Hot & Chat. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
};

export default App;