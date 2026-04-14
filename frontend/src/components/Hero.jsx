import React from 'react';
import { Button } from './ui/button';
import { Car, Award, Users, Phone } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1667020854803-0305af085242"
          alt="Professional driving instruction in Kuwait"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by 1000+ Students</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learn to Drive with{' '}
              <span className="text-green-600">Confidence</span> in Kuwait
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Professional driving lessons in multiple languages. Expert instructors with 15-30+ years experience. Pass your Kuwait driving test on the first try!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">95%</div>
                <div className="text-sm text-gray-600 mt-1">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Students</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                <Car className="w-5 h-5 mr-2" />
                Book Your Lesson
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+96555998579">+965 55998579</a>
              </Button>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-sm text-gray-600">We teach in:</span>
              {['English', 'Arabic', 'Hindi', 'Malayalam', 'Tamil'].map((lang) => (
                <span key={lang} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611508106567-6218ae6c5f6a"
                alt="Professional driving training in Kuwait"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-green-600">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5.0★</div>
                    <div className="text-sm text-gray-600">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Light Decoration */}
      <div className="absolute top-40 right-10 hidden xl:block opacity-20">
        <div className="flex flex-col space-y-2">
          <div className="w-16 h-16 rounded-full bg-red-600"></div>
          <div className="w-16 h-16 rounded-full bg-yellow-400"></div>
          <div className="w-16 h-16 rounded-full bg-green-600"></div>
        </div>
      </div>
    </section>
  );
};
