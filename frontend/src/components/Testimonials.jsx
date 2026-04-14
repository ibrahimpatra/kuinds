import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { testimonials } from '../mockData';
import { Avatar, AvatarFallback } from './ui/avatar';

export const Testimonials = () => {
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
            Don't just take our word for it - hear from our satisfied students who passed their driving tests!
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
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12 bg-green-100 text-green-700">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">{testimonial.text}</p>
              <p className="text-sm text-gray-400">{testimonial.date}</p>
            </div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Find Us on Google Maps</h3>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.817265625!2d48.05531!3d29.3263828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b35913f647b%3A0x4aab8e6869ab55fe!2sKuwait%20India%20Driving%20School!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kuwait India Driving School Location"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 3 Al Qatami St. 24 Ln, Salmiya, Kuwait
            </p>
            <p className="text-gray-600">
              <strong>Also serving:</strong> Mahboula, Block 2, Street 215 and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
