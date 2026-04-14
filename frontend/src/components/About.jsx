import React from 'react';
import { CheckCircle, MapPin, Clock, Shield } from 'lucide-react';

export const About = () => {
  const features = [
    { icon: CheckCircle, text: "Experienced instructors with 15-30+ years" },
    { icon: CheckCircle, text: "Multilingual instruction (English, Arabic, Hindi, Malayalam, Tamil)" },
    { icon: CheckCircle, text: "Manual & automatic transmission training" },
    { icon: CheckCircle, text: "Pickup & drop service across Kuwait" },
    { icon: CheckCircle, text: "Flexible timing - 7 days a week" },
    { icon: CheckCircle, text: "Affordable pricing & package deals" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1574853792871-8a8d2f4df893"
                alt="Traffic signals training"
                className="rounded-xl shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1634539990685-4d7241a89bad"
                alt="Driving school car"
                className="rounded-xl shadow-lg h-64 w-full object-cover mt-8"
              />
            </div>
            {/* Kuwait Background */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-72 h-72 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1567074994308-df304d5611db"
                alt="Kuwait Towers"
                className="rounded-full object-cover w-full h-full blur-sm"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Kuwait's Premier <span className="text-green-600">Indian Driving School</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Kuwait India Driving School is your trusted partner for obtaining a Kuwait driving license. Located in Mahboula, we specialize in helping expats - especially from the Indian community - learn to drive with confidence and pass their tests on the first attempt.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our experienced instructors understand the challenges faced by new drivers in Kuwait. We provide step-by-step training in your preferred language, focusing on practical skills and test-specific preparation.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
                <MapPin className="w-8 h-8 text-red-600 mb-2" />
                <div className="text-sm font-semibold text-gray-900">Location</div>
                <div className="text-xs text-gray-600 mt-1">Mahboula, Kuwait</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                <Clock className="w-8 h-8 text-yellow-600 mb-2" />
                <div className="text-sm font-semibold text-gray-900">Timing</div>
                <div className="text-xs text-gray-600 mt-1">7 Days a Week</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-sm font-semibold text-gray-900">Safety First</div>
                <div className="text-xs text-gray-600 mt-1">Professional Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
