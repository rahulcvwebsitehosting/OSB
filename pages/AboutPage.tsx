import React from 'react';
import { Leaf, Award, Users, AlertTriangle, Info, Dumbbell, Flame } from 'lucide-react';
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

          {/* Nutrition Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-8 text-center">Nutrition & Allergens</h2>
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                We believe in transparency. While our food is 100% vegetarian, we want to ensure our customers with specific dietary requirements have the information they need.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Leaf className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">100% Vegetarian</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our entire kitchen is strictly meat-free and egg-free. We serve authentic lacto-vegetarian cuisine suitable for all vegetarians.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Info className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Dairy Usage</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We use fresh milk, ghee, butter, and paneer (cottage cheese) in many North Indian gravies, sweets, and beverages. Vegan options are available upon request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <AlertTriangle className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Gluten & Wheat</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our Tandoori breads (Naan, Kulcha, Roti), Parottas, and some snacks contain wheat flour/maida. Our Rice & Biryani items are generally gluten-friendly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <AlertTriangle className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Nuts & Allergens</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Cashews (Kaju) and Almonds (Badam) are commonly used in our rich gravies (like Paneer Butter Masala) and sweets. Please inform our staff of any nut allergies before ordering.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nutritional Values Table */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-lg text-gray-800 mb-4 text-center">Estimated Nutritional Values (Per Serving)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-600 max-w-xl mx-auto">
                    <thead className="text-xs text-gray-700 uppercase border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2">Popular Item</th>
                        <th className="px-4 py-2 text-right">Calories (Approx)</th>
                        <th className="px-4 py-2 text-right">Protein</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-2 font-medium text-gray-900">Pani Puri (Set of 5)</td>
                        <td className="px-4 py-2 text-right">180 kcal</td>
                        <td className="px-4 py-2 text-right">4g</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-2 font-medium text-gray-900">Masala Dosa</td>
                        <td className="px-4 py-2 text-right">350 kcal</td>
                        <td className="px-4 py-2 text-right">8g</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-2 font-medium text-gray-900">Idli (2 pcs) w/ Sambar</td>
                        <td className="px-4 py-2 text-right">160 kcal</td>
                        <td className="px-4 py-2 text-right">6g</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium text-gray-900">Paneer Butter Masala (150g)</td>
                        <td className="px-4 py-2 text-right">320 kcal</td>
                        <td className="px-4 py-2 text-right">10g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-gray-400 text-center mt-3">*Values are approximate estimates based on standard recipes and may vary.</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                 <p className="text-xs text-gray-400 italic">
                   *Disclaimer: While we take precautions, our kitchen handles wheat, dairy, and nuts. Cross-contamination is possible. Please consult our staff if you have severe allergies.
                 </p>
              </div>
            </div>
          </div>

          {/* Gym Bro Section */}
          <div className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-xl overflow-hidden relative">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Dumbbell className="text-brand-red" size={32} />
                    <h2 className="text-3xl font-display font-bold text-white">Gym Bro's Corner</h2>
                  </div>
                  <p className="text-gray-400 max-w-xl">
                    Tracking your intake? Here are our best high-protein vegetarian options to fuel your gains.
                    <span className="block text-xs mt-1 text-gray-500">*Macros are approximate estimates per serving.</span>
                  </p>
                </div>
                <div className="mt-4 md:mt-0 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                  <span className="text-brand-yellow font-bold flex items-center gap-2">
                    <Flame size={18} /> Power Your Workout
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {/* Item 1 */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-brand-red transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl group-hover:text-brand-red transition-colors">Paneer Tikka</h3>
                    <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">High Protein</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center mb-2">
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Prot</span>
                      <span className="font-bold text-white">18g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Carb</span>
                      <span className="font-bold text-white">8g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Fat</span>
                      <span className="font-bold text-white">15g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Cals</span>
                      <span className="font-bold text-white">240</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Marinated cottage cheese grilled to perfection. Low carb, high protein.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-brand-red transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl group-hover:text-brand-red transition-colors">Chana Masala</h3>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">Balanced</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center mb-2">
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Prot</span>
                      <span className="font-bold text-white">12g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Carb</span>
                      <span className="font-bold text-white">35g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Fat</span>
                      <span className="font-bold text-white">8g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Cals</span>
                      <span className="font-bold text-white">260</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Chickpeas cooked in spicy gravy. Great source of fiber and plant protein.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-brand-red transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl group-hover:text-brand-red transition-colors">Dal Fry</h3>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">Classic</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center mb-2">
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Prot</span>
                      <span className="font-bold text-white">10g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Carb</span>
                      <span className="font-bold text-white">25g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Fat</span>
                      <span className="font-bold text-white">7g</span>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <span className="block text-xs text-gray-400">Cals</span>
                      <span className="font-bold text-white">200</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Yellow lentils tempered with spices. Light, healthy, and comforting.</p>
                </div>
              </div>
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