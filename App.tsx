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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 md:hidden pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-end h-16 px-6 pb-2 max-w-md mx-auto">
        {/* Home */}
        <Link to="/" className={`flex flex-col items-center justify-end h-full w-12 pb-1 transition-colors ${isActive('/') ? 'text-brand-red' : 'text-gray-400 hover:text-gray-600'}`}>
          <Home size={22} strokeWidth={isActive('/') ? 2.5 : 2} />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </Link>

        {/* Map */}
        <Link to="/location" className={`flex flex-col items-center justify-end h-full w-12 pb-1 transition-colors ${isActive('/location') ? 'text-brand-red' : 'text-gray-400 hover:text-gray-600'}`}>
          <MapPin size={22} strokeWidth={isActive('/location') ? 2.5 : 2} />
          <span className="text-[10px] mt-1 font-medium">Map</span>
        </Link>

        {/* Prominent Menu Button */}
        <Link to="/menu" className="flex flex-col items-center justify-end h-full relative -top-6 w-14 group">
          <div className={`p-4 rounded-full shadow-xl border-4 border-brand-cream transition-all duration-300 transform group-hover:scale-110 ${isActive('/menu') ? 'bg-brand-red text-white' : 'bg-brand-dark text-white'}`}>
            <ShoppingBag size={24} fill="currentColor" />
          </div>
          <span className={`text-xs font-bold mt-1 transition-colors ${isActive('/menu') ? 'text-brand-red' : 'text-gray-500'}`}>Menu</span>
        </Link>

        {/* WhatsApp Order */}
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-end h-full text-green-600 hover:text-green-700 transition-colors w-12 pb-1">
          <div className="relative">
             <MessageCircle size={22} strokeWidth={2} />
             <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white"></span>
             </span>
          </div>
          <span className="text-[10px] mt-1 font-bold">Order</span>
        </a>

        {/* Call */}
        <a href={`tel:${SETTINGS.phone}`} className="flex flex-col items-center justify-end h-full text-gray-400 hover:text-gray-600 transition-colors w-12 pb-1">
          <Phone size={22} strokeWidth={2} />
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-display font-bold text-brand-red tracking-tight group-hover:scale-105 transition-transform origin-left">OSB</span>
            <span className="text-xs font-semibold text-brand-dark tracking-wider -mt-1 group-hover:text-brand-red transition-colors">HOT & CHAT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-red relative py-1 ${
                  location.pathname === link.path ? 'text-brand-red font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red rounded-full"></span>
                )}
              </Link>
            ))}
            <a
              href={SETTINGS.swiggyLink}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-red text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Order on Swiggy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-dark p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium py-2 border-b border-gray-50 last:border-0 flex justify-between items-center ${
                location.pathname === link.path ? 'text-brand-red pl-2' : 'text-gray-700'
              }`}
            >
              {link.name}
              {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-brand-red"></div>}
            </Link>
          ))}
          <a
            href={SETTINGS.swiggyLink}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-red text-white text-center py-3.5 rounded-xl font-bold shadow-lg mt-4 active:scale-95 transition-transform"
          >
            Order on Swiggy
          </a>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-brand-dark text-white pt-16 pb-28 md:pb-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="text-2xl font-display font-bold text-brand-yellow mb-5">OSB Hot & Chat</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
            West Mambalam's favorite destination for authentic pure-veg chats, South Indian tiffin, and fast food. Quality and taste since 2008.
          </p>
          <div className="flex space-x-4">
            <a href={SETTINGS.facebookLink} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-brand-red transition-all">
              <Facebook size={20} />
            </a>
            <a href={SETTINGS.linkedinLink} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-brand-red transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-5 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/menu" className="hover:text-brand-yellow hover:translate-x-1 transition-all inline-block">Full Menu</Link></li>
            <li><Link to="/location" className="hover:text-brand-yellow hover:translate-x-1 transition-all inline-block">Directions</Link></li>
            <li><Link to="/about" className="hover:text-brand-yellow hover:translate-x-1 transition-all inline-block">Our Story</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-yellow hover:translate-x-1 transition-all inline-block">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-5 border-b border-gray-700 pb-2 inline-block">Contact</h3>
          <div className="space-y-3">
             <p className="text-gray-300 text-sm flex items-start gap-3">
               <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
               <span className="opacity-90">{SETTINGS.address}</span>
             </p>
             <p className="text-gray-300 text-sm flex items-center gap-3">
               <Phone size={18} className="text-brand-red shrink-0" />
               <span className="opacity-90">{SETTINGS.phone}</span>
             </p>
             <div className="mt-4 p-3 bg-gray-800 rounded-lg inline-block">
               <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Open Daily</p>
               <p className="text-brand-yellow font-bold">{SETTINGS.timings}</p>
             </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} OSB Hot & Chat. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-cream font-sans flex flex-col selection:bg-brand-red selection:text-white">
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