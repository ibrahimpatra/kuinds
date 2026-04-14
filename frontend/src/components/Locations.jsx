import React from 'react';
import { MapPin } from 'lucide-react';

export const Locations = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Location 1 */}
      <div className="bg-white border-2 border-green-600 rounded-xl p-4 shadow-lg">
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-5 h-5 text-red-600" />
          <h4 className="font-bold text-gray-900">Salmiya</h4>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.817265625!2d48.05531!3d29.3263828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b35913f647b%3A0x4aab8e6869ab55fe!2sKuwait%20India%20Driving%20School!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Salmiya Location"
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">3 Al Qatami St, Salmiya</p>
      </div>

      {/* Location 2 */}
      <div className="bg-white border-2 border-green-600 rounded-xl p-4 shadow-lg">
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-5 h-5 text-green-600" />
          <h4 className="font-bold text-gray-900">Farwaniya</h4>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.169374486392!2d47.9535446!3d29.272821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9bae848a5247%3A0x5e0c411f9ea61ac5!2sDriving%20school%20farwaniya!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Farwaniya Location"
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">Farwaniya, Kuwait</p>
      </div>
    </div>
  );
};
