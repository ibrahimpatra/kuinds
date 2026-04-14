import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Traffic Sign Decorations */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-10">
        <img src="https://customer-assets.emergentagent.com/job_learn-drive-kuwait/artifacts/nnqz70pt_Gemini_Generated_Image_qaslysqaslysqasl.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-10">
        <img src="https://customer-assets.emergentagent.com/job_learn-drive-kuwait/artifacts/nnqz70pt_Gemini_Generated_Image_qaslysqaslysqasl.png" alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-green-600">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from satisfied students who passed their driving tests!
          </p>
        </div>

        {/* Google Rating Card */}
        <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-600 rounded-2xl p-8 text-center shadow-xl">
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
                <Star key={star} className="w-8 h-8 fill-green-600 text-green-600" />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-gray-600 mb-6">Based on 100+ verified reviews</p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-3719eb44-e750-4257-912d-bd9864beab99" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};
