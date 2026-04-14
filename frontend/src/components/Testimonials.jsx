import React from 'react';
import { Star, MapPin, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { googleReviews } from '../data/googleReviews';
import { Avatar, AvatarFallback } from './ui/avatar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

export const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from our satisfied students who passed their driving tests!
          </p>
        </div>

        {/* Google Rating Card */}
        <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-gray-900">Google Reviews</span>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-gray-600 mb-6">Based on 100+ verified reviews</p>
          <a
            href="https://www.google.com/maps/place/Kuwait+India+Driving+School/@29.3263828,48.05531,1970m/data=!3m1!1e3!4m6!3m5!1s0x3fcf9b35913f647b:0x4aab8e6869ab55fe!8m2!3d29.3263824!4d48.0645663!16s%2Fg%2F11h_234yd0?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
          >
            <span>View All Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <style>{`
            .slick-slide > div {
              padding: 0 8px;
            }
            @media (max-width: 640px) {
              .slick-slide > div {
                padding: 0 4px;
              }
            }
          `}</style>
          <Slider {...sliderSettings}>
            {googleReviews.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-yellow-400 rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:border-red-500 transition-all duration-300 mx-1 sm:mx-2 min-h-[280px] sm:min-h-[320px]">
                  <div className="flex items-center space-x-3 mb-4 pb-4 border-b-2 border-yellow-200">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 text-white flex-shrink-0 border-2 border-yellow-400">
                      <AvatarFallback className="text-base sm:text-lg font-bold">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">{testimonial.name}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">{testimonial.text}</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Google Maps - Both Locations */}
        <div className="space-y-8">
          {/* Location 1: Salmiya */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-4 border-yellow-400 shadow-xl">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <MapPin className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Location 1: Salmiya</h3>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-red-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.817265625!2d48.05531!3d29.3263828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b35913f647b%3A0x4aab8e6869ab55fe!2sKuwait%20India%20Driving%20School!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kuwait India Driving School - Salmiya Location"
              ></iframe>
            </div>
            <div className="mt-6 bg-white p-4 rounded-lg border-2 border-yellow-400">
              <p className="text-gray-700 font-semibold text-center">
                <strong className="text-red-600">Address:</strong> 3 Al Qatami St. 24 Ln, Salmiya, Kuwait
              </p>
            </div>
          </div>

          {/* Location 2: Farwaniya */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-4 border-yellow-400 shadow-xl">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <MapPin className="w-7 h-7 text-green-600" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Location 2: Farwaniya</h3>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-red-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.169374486392!2d47.9535446!3d29.272821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9bae848a5247%3A0x5e0c411f9ea61ac5!2sDriving%20school%20farwaniya!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Driving School Farwaniya Location"
              ></iframe>
            </div>
            <div className="mt-6 bg-white p-4 rounded-lg border-2 border-yellow-400">
              <p className="text-gray-700 font-semibold text-center">
                <strong className="text-green-600">Address:</strong> Farwaniya, Kuwait
              </p>
            </div>
          </div>

          {/* Coverage Note */}
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 p-6 rounded-2xl border-4 border-red-600 text-center shadow-xl">
            <p className="text-gray-900 font-black text-xl sm:text-2xl">
              🚗 Serving All Areas Across Kuwait 🚗
            </p>
            <p className="text-gray-800 font-bold mt-2">
              Pickup & Drop Service Available Everywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
