import React from 'react';
import { Phone, MapPin, Users } from 'lucide-react';

export const TrainerCard = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 border-y-8 border-red-600 relative overflow-hidden">
      {/* Traffic Signs Border - Top */}
      <div className="absolute top-0 left-0 right-0 flex justify-around py-2 bg-white border-b-4 border-red-600">
        {['🚫', '⛔', '🚷', '🚳', '🚭', '⚠️', '🔺', '➡️', '⬅️', '↗️'].map((sign, i) => (
          <span key={i} className="text-2xl">{sign}</span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-8 border-red-600">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Info */}
            <div className="bg-yellow-400 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-blue-900 font-bold text-2xl mb-2">Trainer:</h3>
                  <p className="text-blue-900 font-black text-4xl">J. Mohamed</p>
                  <p className="text-blue-900 font-bold text-2xl mt-2">J. முகம்மது</p>
                </div>

                <div className="bg-red-600 text-white p-6 rounded-2xl">
                  <h2 className="font-black text-5xl md:text-6xl tracking-wider drop-shadow-lg">
                    DRIVING SCHOOL
                  </h2>
                  <p className="text-4xl font-bold mt-2">Al-Kuwait</p>
                </div>

                <div>
                  <h4 className="text-pink-600 font-bold text-2xl mb-3">Languages:</h4>
                  <div className="space-y-2">
                    <p className="text-blue-900 font-bold text-xl">தமிழ், English,</p>
                    <p className="text-blue-900 font-bold text-xl">Malayalam, Hindi,</p>
                    <p className="text-blue-900 font-bold text-xl">Telugu & Arabic</p>
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <a href="tel:+96555998579" className="font-black text-3xl">
                      PH: 55998579
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image & Details */}
            <div className="bg-yellow-300 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h4 className="text-pink-600 font-bold text-2xl mb-4">அனுபவமிக்க</h4>
                <p className="text-blue-900 font-bold text-xl mb-2">பயிற்சியாளரின் மூலம்</p>
                <p className="text-blue-900 font-bold text-xl mb-6">சிறந்த முறையில்</p>
                <p className="text-blue-900 font-bold text-xl">கற்றுக்கொடுப்படும்.</p>
              </div>

              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1611508106567-6218ae6c5f6a"
                  alt="Driving School Car"
                  className="rounded-2xl shadow-2xl border-4 border-red-600 w-full"
                />
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-blue-900 font-bold">All Areas in Kuwait</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-blue-900 font-bold">1000+ Happy Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Signs Border - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around py-2 bg-white border-t-4 border-red-600 mt-16">
        {['🅿️', '🚸', '⚠️', '🔴', '🟢', '🟡', '➡️', '⬅️', '↗️', '🚫'].map((sign, i) => (
          <span key={i} className="text-2xl">{sign}</span>
        ))}
      </div>
    </section>
  );
};
