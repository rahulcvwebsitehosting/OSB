import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { SETTINGS } from '../data/settings';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Get in Touch</h1>
          <p className="text-gray-600">Have feedback or want to order in bulk? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
             <div className="bg-brand-cream p-8 rounded-2xl border border-orange-100">
               <h3 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-start">
                   <Phone className="text-brand-red mt-1 mr-4" />
                   <div>
                     <p className="font-bold text-gray-800">Phone</p>
                     <a href={`tel:${SETTINGS.phone}`} className="text-gray-600 hover:text-brand-red">{SETTINGS.phone}</a>
                     <p className="text-xs text-gray-400 mt-1">Available during working hours</p>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <Mail className="text-brand-red mt-1 mr-4" />
                   <div>
                     <p className="font-bold text-gray-800">Email</p>
                     <a href={`mailto:${SETTINGS.email}`} className="text-gray-600 hover:text-brand-red">{SETTINGS.email}</a>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <MapPin className="text-brand-red mt-1 mr-4" />
                   <div>
                     <p className="font-bold text-gray-800">Address</p>
                     <p className="text-gray-600">{SETTINGS.address}</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Want to order online?</h4>
                <p className="text-gray-600 text-sm mb-4">For the fastest service, please order via Swiggy or WhatsApp directly.</p>
                <div className="flex gap-3">
                  <a href={SETTINGS.swiggyLink} target="_blank" rel="noreferrer" className="flex-1 bg-brand-red text-white py-2 rounded text-center font-bold text-sm">Swiggy</a>
                  <a href={`https://wa.me/${SETTINGS.whatsapp}`} target="_blank" rel="noreferrer" className="flex-1 bg-green-500 text-white py-2 rounded text-center font-bold text-sm">WhatsApp</a>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Phone / Email</label>
                <input
                  type="text"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-3 rounded-lg font-bold text-white transition flex justify-center items-center ${
                  status === 'success' ? 'bg-green-600' : 'bg-brand-dark hover:bg-black'
                }`}
              >
                {status === 'idle' && (
                  <>Send Message <Send size={18} className="ml-2" /></>
                )}
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && (
                  <>Sent Successfully <CheckCircle size={18} className="ml-2" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;