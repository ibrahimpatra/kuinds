import React from 'react';
import { CheckCircle, MapPin, Clock, Award, Car } from 'lucide-react';

export const About = () => {
  const features = [
    { icon: Award, text: "15-30+ years experienced instructors" },
    { icon: Car, text: "Manual & automatic training" },
    { icon: MapPin, text: "All Kuwait areas covered" },
    { icon: Clock, text: "Flexible timing - 7 days/week" }
  ];

  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Traffic Sign Decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">🚦</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">⚠️</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-yellow-400">
            About Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kuwait's Premier <span className="text-green-600">Driving School</span>
          </h2>
          <p className="text-lg text-gray-600">
            Expert multilingual instructors helping expats pass Kuwait driving tests on first attempt
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-4 border-yellow-400 rounded-2xl p-6 hover:shadow-2xl hover:border-red-500 transition-all duration-300 text-center"
            >
              <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-gray-900 font-bold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
