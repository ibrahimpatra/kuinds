import React from 'react';
import { services } from '../mockData';
import { GraduationCap, Award, Car, Languages, MapPin, UserCheck } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Award,
  Car,
  Languages,
  MapPin,
  UserCheck
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete <span className="text-yellow-600">Driving Solutions</span> for You
          </h2>
          <p className="text-lg text-gray-600">
            From beginner lessons to test preparation, we offer comprehensive driving instruction tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const colors = [
              { bg: 'from-red-50 to-red-100', border: 'border-red-200', icon: 'text-red-600', iconBg: 'bg-red-100' },
              { bg: 'from-green-50 to-green-100', border: 'border-green-200', icon: 'text-green-600', iconBg: 'bg-green-100' },
              { bg: 'from-yellow-50 to-yellow-100', border: 'border-yellow-200', icon: 'text-yellow-600', iconBg: 'bg-yellow-100' },
              { bg: 'from-red-50 to-red-100', border: 'border-red-200', icon: 'text-red-600', iconBg: 'bg-red-100' },
              { bg: 'from-green-50 to-green-100', border: 'border-green-200', icon: 'text-green-600', iconBg: 'bg-green-100' },
              { bg: 'from-yellow-50 to-yellow-100', border: 'border-yellow-200', icon: 'text-yellow-600', iconBg: 'bg-yellow-100' }
            ];
            const color = colors[index % 6];

            return (
              <div
                key={service.id}
                className={`group bg-gradient-to-br ${color.bg} border ${color.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`${color.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${color.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Driving Journey?</h3>
          <p className="text-lg mb-6 text-green-50">
            Join hundreds of satisfied students who passed their test with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+96555998579"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Call: +965 55998579
            </a>
            <a
              href="https://wa.me/96555998579"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
