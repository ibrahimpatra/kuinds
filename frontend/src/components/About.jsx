import React from 'react';
import { CheckCircle, MapPin, Clock, Award, Car, Users } from 'lucide-react';

export const About = () => {
  const features = [
    { icon: Award, text: "15-30+ years experienced instructors", color: "text-green-600" },
    { icon: Car, text: "Manual & automatic training", color: "text-red-600" },
    { icon: MapPin, text: "All Kuwait areas covered", color: "text-green-600" },
    { icon: Clock, text: "Flexible timing - 7 days/week", color: "text-red-600" },
    { icon: Users, text: "1000+ successful students", color: "text-green-600" },
    { icon: CheckCircle, text: "95% first-attempt pass rate", color: "text-red-600" }
  ];

  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Traffic Sign Decorations */}
      <div className="absolute top-10 left-5 w-12 h-12 opacity-10">
        <img src="https://customer-assets.emergentagent.com/job_learn-drive-kuwait/artifacts/nnqz70pt_Gemini_Generated_Image_qaslysqaslysqasl.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-5 w-12 h-12 opacity-10">
        <img src="https://customer-assets.emergentagent.com/job_learn-drive-kuwait/artifacts/nnqz70pt_Gemini_Generated_Image_qaslysqaslysqasl.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10">
        <img src="https://customer-assets.emergentagent.com/job_learn-drive-kuwait/artifacts/nnqz70pt_Gemini_Generated_Image_qaslysqaslysqasl.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 opacity-10">
        <img src="https://customer-assets.emergentagent.com/job_learn-drive-kuwait/artifacts/nnqz70pt_Gemini_Generated_Image_qaslysqaslysqasl.png" alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-green-600">
            About Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kuwait's Premier <span className="text-green-600">Driving School</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kuwait India Driving School specializes in helping expats obtain their Kuwait driving license with expert multilingual instruction. Our experienced trainers understand the unique challenges faced by new drivers in Kuwait and provide step-by-step training in your preferred language.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-green-600 rounded-2xl p-6 hover:shadow-2xl hover:border-red-500 transition-all duration-300 text-center group"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <p className="text-gray-900 font-bold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
