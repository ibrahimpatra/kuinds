import React, { useState, useEffect } from 'react';

export const LoadingScreen = () => {
  const [activeLight, setActiveLight] = useState(0);
  const lights = [
    { color: 'bg-red-600', text: 'STOP', shadowColor: 'shadow-red-600' },
    { color: 'bg-yellow-400', text: 'WAIT', shadowColor: 'shadow-yellow-400' },
    { color: 'bg-green-600', text: 'GO', shadowColor: 'shadow-green-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % 3);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        {/* Traffic Light */}
        <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl">
          {lights.map((light, index) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-full mb-4 last:mb-0 transition-all duration-300 ${
                activeLight === index
                  ? `${light.color} ${light.shadowColor} shadow-2xl scale-110`
                  : 'bg-gray-600 opacity-30'
              }`}
            ></div>
          ))}
        </div>

        {/* Text */}
        <div className="text-4xl font-black text-gray-900">
          {lights[activeLight].text}
        </div>

        {/* School Name */}
        <div className="text-center">
          <div className="text-xl font-bold text-gray-700">Kuwait India Driving School</div>
          <div className="text-sm text-gray-500 mt-2">Loading...</div>
        </div>
      </div>
    </div>
  );
};
