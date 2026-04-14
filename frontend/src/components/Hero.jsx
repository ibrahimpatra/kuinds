import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Car, Award, Users, Phone } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const rotatingWords = ['Professionally', 'Confidently', 'Perfectly', 'Successfully'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1570696657911-287e234bb781',
      alt: 'Professional driving instruction'
    },
    {
      url: 'https://images.unsplash.com/photo-1667020854803-0305af085242',
      alt: 'Expert instructors teaching'
    },
    {
      url: 'https://images.unsplash.com/photo-1630406144797-821be1f35d75',
      alt: 'Modern teaching methods'
    },
    {
      url: 'https://images.pexels.com/photos/9518244/pexels-photo-9518244.jpeg',
      alt: 'Student learning to drive'
    },
    {
      url: 'https://images.pexels.com/photos/9518017/pexels-photo-9518017.jpeg',
      alt: 'Professional instruction in Kuwait'
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

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
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings} className="h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="h-screen">
              <div className="relative h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by 1000+ Students</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Learn to Drive{' '}
              <span className="inline-block min-w-[280px] text-green-400 transition-all duration-500">
                {rotatingWords[currentWord]}
              </span>
              <br />
              in Kuwait
            </h1>

            <p className="text-xl text-gray-100 leading-relaxed drop-shadow-lg">
              Professional driving lessons in multiple languages. Expert instructors with 15-30+ years experience. Pass your Kuwait driving test on the first try!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-sm text-gray-200 mt-1">Years Experience</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-sm text-gray-200 mt-1">Pass Rate</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-400">1000+</div>
                <div className="text-sm text-gray-200 mt-1">Happy Students</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-2xl"
                onClick={scrollToContact}
              >
                <Car className="w-5 h-5 mr-2" />
                Book Your Lesson
              </Button>
              <Button 
                size="lg" 
                className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white text-lg px-8 py-6 shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+96555998579">+965 55998579</a>
              </Button>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-sm text-gray-200 font-semibold">We teach in:</span>
              {['English', 'Arabic', 'Hindi', 'Malayalam', 'Tamil'].map((lang) => (
                <span key={lang} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Light Decoration */}
      <div className="absolute top-40 right-10 hidden xl:block opacity-30 z-10">
        <div className="flex flex-col space-y-2">
          <div className="w-16 h-16 rounded-full bg-red-600 shadow-2xl animate-pulse" style={{ animationDuration: '2s' }}></div>
          <div className="w-16 h-16 rounded-full bg-yellow-400 shadow-2xl animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.7s' }}></div>
          <div className="w-16 h-16 rounded-full bg-green-600 shadow-2xl animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.4s' }}></div>
        </div>
      </div>
    </section>
  );
};
