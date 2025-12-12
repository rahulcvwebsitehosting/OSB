import React from 'react';
import { MapPin, Clock, Phone, Navigation, Share2 } from 'lucide-react';
import { SETTINGS } from '../data/settings';

const LocationPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Map Header */}
      <div className="h-[40vh] w-full relative bg-gray-200">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.671399898236!2d80.2255!3d13.0405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI1LjgiTiA4MMKwMTMnMzEuOCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            className="absolute inset-0 w-full h-full"
            title="Full Location Map"
          ></iframe>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white -mt-24 relative z-10 rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8">
              <div>
                <h1 className="text-3xl font-display font-bold text-brand-dark mb-2">{SETTINGS.name}</h1>
                <p className="text-gray-500 font-medium">West Mambalam, Chennai</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                 <a href={SETTINGS.mapsLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    <Navigation size={18} /> Directions
                 </a>
                 <button onClick={() => {
                   if (navigator.share) {
                     navigator.share({
                       title: SETTINGS.name,
                       text: `Check out ${SETTINGS.name} at West Mambalam`,
                       url: window.location.href
                     });
                   }
                 }} className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
                    <Share2 size={18} /> Share
                 </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                   <h3 className="flex items-center text-lg font-bold text-brand-red mb-3">
                     <MapPin className="mr-2" /> Address
                   </h3>
                   <p className="text-gray-700 text-lg leading-relaxed">{SETTINGS.address}</p>
                   <p className="text-sm text-gray-500 mt-2">Landmark: Near Punjab National Bank / West Mambalam Railway Station</p>
                </div>

                <div>
                   <h3 className="flex items-center text-lg font-bold text-brand-red mb-3">
                     <Phone className="mr-2" /> Contact
                   </h3>
                   <p className="text-gray-700 text-lg">
                     <a href={`tel:${SETTINGS.phone}`} className="hover:text-brand-red underline">{SETTINGS.phone}</a>
                   </p>
                   <div className="mt-4">
                     <a href={`https://wa.me/${SETTINGS.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">
                       Chat on WhatsApp
                     </a>
                   </div>
                </div>
              </div>

              <div className="bg-brand-cream p-6 rounded-xl border border-orange-100">
                <h3 className="flex items-center text-lg font-bold text-brand-dark mb-4">
                  <Clock className="mr-2" /> Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                    <span className="font-medium text-gray-700">Monday - Sunday</span>
                    <span className="font-bold text-brand-red">11:00 AM - 10:30 PM</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Open Now (Confirm via Call)
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationPage;